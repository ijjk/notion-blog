import path from 'path'

export const NOTION_TOKEN = process.env.NOTION_TOKEN
export const BLOG_INDEX_ID = process.env.BLOG_INDEX_ID
export const API_ENDPOINT = 'https://www.notion.so/api/v3'
export const BLOG_INDEX_CACHE = path.resolve('.blog_index_data')
