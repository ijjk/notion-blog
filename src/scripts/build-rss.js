const fs = require('fs')
const { parse } = require('url')
const { resolve } = require('path')
const { promisify } = require('util')
const { textBlock } = require('../lib/notion/renderers')
const { renderToStaticMarkup } = require('react-dom/server')
const { BASE_URL } = require('../lib/notion/client-constants')

/*
  Look into using __NEXT_DATA__ from generated HTML files instead of re-pulling
  the data
 */

const writeFile = promisify(fs.writeFile)

// constants
const NOW = new Date().toJSON()

function mapToAuthor(author) {
  return `<author><name>${author.real}</name></author>`
}

function decode(string) {
  return string
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function mapToEntry(post) {
  const url = parse(post.link)
  const link = url.hostname !== null ? post.link : `${BASE_URL}${post.link}`

  return `
    <entry>
      <id>${link}</id>
      <title>${decode(post.title)}</title>
      <link href="${link}"/>
      <updated>${new Date(post.date).toJSON()}</updated>
      <content type="xhtml">
        <div xmlns="http://www.w3.org/1999/xhtml">
          ${renderToStaticMarkup(
            post.preview
              ? post.preview.map((block, idx) =>
                  textBlock(block, false, post.title + idx)
                )
              : post.content
          )}
          <p class="more">
            <a href="${link}">Read more</a>
          </p>
        </div>
      </content>
      ${post.authors.map(mapToAuthor).join('\n      ')}
    </entry>`
}

function concat(total, item) {
  return total + item
}

function createRSS(blogPosts) {
  const postsString = blogPosts.map(mapToEntry).reduce(concat, '')

  return `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>My Site's News</title>
    <subtitle>Blog</subtitle>
    <link href="${BASE_URL}/atom" rel="self" type="application/rss+xml"/>
    <link href="${BASE_URL}" />
    <updated>${NOW}</updated>
    <id>${BASE_URL}</id>${postsString}
  </feed>`
}

async function main() {
  const path = './public/atom'
  let { posts: blogPosts } = await loadNotionPosts()

  blogPosts = blogPosts.sort((a, b) => {
    return Math.sign(new Date(b.date).getTime() - new Date(a.date).getTime())
  })

  await writeFile(resolve(path), createRSS(blogPosts))
  // eslint-disable-next-line no-console
  console.log(`Atom feed file generated at \`${path}\``)
}

main().catch(error => process.stderr.write(error))
