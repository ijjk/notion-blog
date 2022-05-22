import { Client } from '@notionhq/client'

export const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
})
