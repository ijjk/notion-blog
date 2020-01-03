import Link from 'next/link'
import Header from '../../components/header'

import blogStyles from '../../styles/blog.module.css'
import sharedStyles from '../../styles/shared.module.css'

import { getBlogLink } from '../../lib/blog-helpers'
import { textBlock } from '../../lib/notion/renderers'
import getBlogIndex from '../../lib/notion/getBlogIndex'

export async function unstable_getStaticProps() {
  const postsTable = await getBlogIndex()

  const posts: any[] = Object.keys(postsTable)
    .map(slug => {
      const post = postsTable[slug]
      // remove draft posts in production
      if (
        process.env.NODE_ENV === 'production' &&
        post.Published !== 'Yes'
      ) {
        return null
      }
      return post
    })
    .filter(Boolean)

  return {
    props: {
      posts
    }
  }
}

export default ({ posts = [] }) => {
  return (
    <>
      <Header titlePre='Blog' />
      <div className={`${sharedStyles.layout} ${blogStyles.blogIndex}`}>
        <h1>My Notion Blog</h1>
        {posts.length === 0 && (
          <p className={blogStyles.noPosts}>There are no posts yet</p>
        )}
        {posts.map(post => {
          return (
            <div className={blogStyles.postPreview} key={post.Slug}>
              <Link href='/blog/[slug]' as={getBlogLink(post.Slug)}>
                <a>
                  <h3>{post.Page}</h3>
                </a>
              </Link>
              <p>
                {post.preview.map((block, idx) =>
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
