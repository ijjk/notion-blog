import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/header'

import blogStyles from '../../styles/blog.module.scss'
import sharedStyles from '../../styles/shared.module.css'

import {
  getBlogLink,
  getDateStr,
  postIsPublished,
} from '../../lib/blog-helpers'
import { textBlock } from '../../lib/notion/renderers'
import getNotionUsers from '../../lib/notion/getNotionUsers'
import getBlogIndex from '../../lib/notion/getBlogIndex'

import Title from '../../components/primary/title'

export async function getStaticProps({ preview }) {
  const postsTable = await getBlogIndex()

  const authorsToGet: Set<string> = new Set()
  const posts: any[] = Object.keys(postsTable)
    .map(slug => {
      const post = postsTable[slug]
      // remove draft posts in production
      if (!preview && !postIsPublished(post)) {
        return null
      }
      post.Authors = post.Authors || []
      for (const author of post.Authors) {
        authorsToGet.add(author)
      }
      return post
    })
    .filter(Boolean)

  const { users } = await getNotionUsers([...authorsToGet])

  posts.map(post => {
    post.Authors = post.Authors.map(id => users[id].full_name)
  })

  return {
    props: {
      preview: preview || false,
      posts,
    },
    revalidate: 10,
  }
}

export default ({ posts = [], preview }) => {
  return (
    <>
      <Head>
        <title>ニュース | アイカサ</title>
        <meta property="og:title" content="ニュース" />
        <meta property="og:image" content="https://www.i-kasa.com/ogp.jpg" />
        <meta
          property="description"
          content="アイカサの最新情報などをお伝えします"
        />
        <meta
          property="og:description"
          content="アイカサの最新情報などをお伝えします"
        />
        <meta property="og:url" content="https://www.i-kasa.com" />
        <meta property="og:type" content="website" />
        <meta
          data-hid="twitter:card"
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          data-hid="twitter:site"
          name="twitter:site"
          content="@ikasa1111"
        />
        <meta
          data-hid="og:site_name"
          property="og:site_name"
          content="アイカサ | 傘のシェアリングサービス"
        />
        <meta data-hid="og:locale" property="og:locale" content="ja_JP" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Title
        title="ニュース"
        description
        imgSrc="/assets/ikasa_background.png"
        category
        grey={false}
      />
      {preview && (
        <div className={blogStyles.previewAlertContainer}>
          <div className={blogStyles.previewAlert}>
            <b>Note:</b>
            {` `}Viewing in preview mode{' '}
            <Link href={`/api/clear-preview`}>
              <button className={blogStyles.escapePreview}>Exit Preview</button>
            </Link>
          </div>
        </div>
      )}
      <div className={`${sharedStyles.layout} ${blogStyles.blogIndex}`}>
        {posts.length === 0 && (
          <p className={blogStyles.noPosts}>投稿がありません</p>
        )}
        {posts.map(post => {
          return (
            <div className={blogStyles.postPreview} key={post.Slug}>
              <Link href="/news/[slug]" as={getBlogLink(post.Slug)}>
                <a>
                  <div
                    className={blogStyles.postPreview_thumb}
                    style={{
                      backgroundImage:
                        'url(' +
                        `https://www.i-kasa.com/api/asset?assetUrl=${encodeURIComponent(
                          post.Thumbnail as any
                        )}&blockId=${post.id}` +
                        ')',
                    }}
                  ></div>
                  <h3>
                    <a>{post.Page}</a>
                  </h3>

                  <div className={blogStyles.postPreview_grid}>
                    {post.Description && (
                      <div className={blogStyles.postPreview_description}>
                        {post.Description}
                      </div>
                    )}
                    <div className={blogStyles.postPreview_info}>
                      {post.Date && (
                        <div className="posted">{getDateStr(post.Date)}</div>
                      )}
                    </div>
                  </div>
                  <p>
                    {(!post.preview || post.preview.length === 0) && ''}
                    {(post.preview || []).map((block, idx) =>
                      textBlock(block, true, `${post.Slug}${idx}`)
                    )}
                  </p>
                </a>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}
