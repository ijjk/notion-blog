import { NextApiRequest, NextApiResponse } from 'next'
import { notionClient } from '../../lib/notion/notionClient'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await notionClient.databases.query({
    database_id: process.env.BLOG_INDEX_ID,
  })
  const titles = response.results
    .map((item) => ({
      title: item['properties']['Post']['title'][0]['plain_text'],
      published: item['properties']['Published']['checkbox'],
    }))
    .filter((item) => item.published)
  res.json(titles)
}
