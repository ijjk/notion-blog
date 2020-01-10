import path from 'path'

const normalizeId = id => {
  if (id.length === 36) return id
  return `${id.substr(0, 8)}-${id.substr(8, 4)}-${id.substr(12, 4)}-${id.substr(
    16,
    4
  )}-${id.substr(20)}`
}

export const NOTION_TOKEN = process.env.NOTION_TOKEN
export const BLOG_INDEX_ID = normalizeId(process.env.BLOG_INDEX_ID)
export const API_ENDPOINT = 'https://www.notion.so/api/v3'
export const BLOG_INDEX_CACHE = path.resolve('.blog_index_data')
