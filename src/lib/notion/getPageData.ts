import rpc, { values } from './rpc'

export default async function getPageData(pageId: string) {
  const data = await loadPageChunk({ pageId })
  const blocks = values(data.recordMap.block)

  if (blocks[0] && blocks[0].value.content) {
    // remove table blocks
    blocks.splice(0, 3)
  }

  return { blocks }
}

export function loadPageChunk({
  pageId,
  limit = 100,
  cursor = { stack: [] },
  chunkNumber = 0,
  verticalColumns = false,
}: any) {
  return rpc('loadPageChunk', {
    pageId,
    limit,
    cursor,
    chunkNumber,
    verticalColumns,
  })
}
