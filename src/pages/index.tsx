import Link from 'next/link'
import Header from '../components/header'
import { getBlogLink, getDateStr, postIsReady } from '../lib/blog-helpers'
import { textBlock } from '../lib/notion/renderers'
import getBlogIndex from '../lib/notion/getBlogIndex'

// styles
import blogStyles from '../styles/blog.module.css'
import sharedStyles from '../styles/shared.module.css'

export async function unstable_getStaticProps() {
  const postsTable = await getBlogIndex()

  const posts: any[] = Object.keys(postsTable)
    .map(slug => {
      const post = postsTable[slug]
      // remove draft posts in production
      if (!postIsReady(post)) {
        return null
      }
      return post
    })
    .filter(Boolean)

  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}

export default ({ posts = [] }) => {
  return (
    <>
      <Header />
      <div className={`${sharedStyles.layout} ${blogStyles.blogIndex}`}>
        <h1>omuomugin-pub</h1>
        {posts.length === 0 && (
          <p className={blogStyles.noPosts}>There are no posts yet</p>
        )}
        {posts.map(post => {
          return (
            <div className={blogStyles.postPreview} key={post.Slug}>
              <h3>
                <Link href="/[slug]" as={getBlogLink(post.Slug)}>
                  <a>{post.Page}</a>
                </Link>
              </h3>
              {post.Date && (
                <div className="posted">{getDateStr(post.Date)}</div>
              )}
              <p>
                {(!post.preview || post.preview.length === 0) && ''}
                {(post.preview || []).map((block, idx) =>
                  textBlock(block, true, `${post.Slug}${idx}`)
                )}
              </p>
            </div>
          )
        })}
      </div>
    </>
  )
}
