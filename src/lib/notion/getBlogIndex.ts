import { Sema } from 'async-sema'
import rpc, { values } from './rpc'
import getTableData from './getTableData'
import { getPostPreview } from './getPostPreview'
import { BLOG_INDEX_ID } from './server-constants'

export default async function getBlogIndex(previews = true) {
  const data = await rpc('loadPageChunk', {
    pageId: BLOG_INDEX_ID,
    limit: 999, // TODO: figure out Notion's way of handling pagination
    cursor: { stack: [] },
    chunkNumber: 0,
    verticalColumns: false
  })

  // Parse table with posts
  const tableBlock = values(data.recordMap.block).find(
    (block: any) => block.value.type === 'collection_view'
  )

  const postsTable = await getTableData(tableBlock, true)
  const postsKeys = Object.keys(postsTable)
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

  return postsTable
}
