import { Sema } from 'async-sema'
import rpc, { values } from './rpc'
import getTableData from './getTableData'
import { getPostPreview } from './getPostPreview'
import { readFile, writeFile } from '../fs-helpers'
import { BLOG_INDEX_ID, BLOG_INDEX_CACHE } from './server-constants'

export default async function getBlogIndex(previews = true) {
  let postsTable: any = null
  const isProd = process.env.NODE_ENV === 'production'
  const cacheFile = `${BLOG_INDEX_CACHE}${previews ? '_previews' : ''}`

  if (isProd) {
    try {
      postsTable = JSON.parse(await readFile(cacheFile, 'utf8'))
    } catch (_) {
      /* not fatal */
    }
  }

  if (!postsTable) {
    try {
      const data = await rpc('loadPageChunk', {
        pageId: BLOG_INDEX_ID,
        limit: 999, // TODO: figure out Notion's way of handling pagination
        cursor: { stack: [] },
        chunkNumber: 0,
        verticalColumns: false,
      })

      // Parse table with posts
      const tableBlock = values(data.recordMap.block).find(
        (block: any) => block.value.type === 'collection_view'
      )

      postsTable = await getTableData(tableBlock, true)
    } catch (err) {
      console.error(
        `\nFailed to load Notion posts, did you configure your Notion table as an inline table according to https://github.com/ijjk/notion-blog#creating-your-pages-table\n`
      )
      throw err
    }

    // only get 10 most recent post's previews
    const postsKeys = Object.keys(postsTable).splice(0, 10)

    const sema = new Sema(3, { capacity: postsKeys.length })

    if (previews) {
      await Promise.all(
        postsKeys
          .sort((a, b) => {
            const postA = postsTable[a]
            const postB = postsTable[b]
            const timeA = postA.Date
            const timeB = postB.Date
            return Math.sign(timeB - timeA)
          })
          .map(async postKey => {
            await sema.acquire()
            const post = postsTable[postKey]
            post.preview = post.id
              ? await getPostPreview(postsTable[postKey].id)
              : []
            sema.release()
          })
      )
    }

    if (isProd) {
      writeFile(cacheFile, JSON.stringify(postsTable), 'utf8').catch(() => {})
    }
  }

  return postsTable
}
