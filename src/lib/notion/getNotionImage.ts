import fetch from 'node-fetch'
import { getError } from './rpc'
import querystring from 'querystring'
import { NextApiResponse } from 'next'
import { NOTION_TOKEN, IMAGE_ENDPOINT } from './server-constants'

export default async function getNotionImage(
  res: NextApiResponse,
  imageUrl: string,
  query: any
) {
  const requestURL = `${IMAGE_ENDPOINT}/${imageUrl}?${querystring.stringify(
    query
  )}`
  const imageRes = await fetch(requestURL, {
    method: 'GET',
    headers: {
      cookie: `token_v2=${NOTION_TOKEN}`,
      accept: 'image/webp,image/apng,image/*,*/*;q=0.8',
    },
  })

  if (imageRes.ok) {
    res.setHeader('Content-Type', imageRes.headers.get('content-type')!)
    imageRes.body.pipe(res)
  } else {
    console.log('bad request', imageRes.status)
    res.json({ status: 'error', message: 'failed to load image' })
    throw new Error(await getError(imageRes))
  }
}
