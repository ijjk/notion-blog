import { NextApiRequest, NextApiResponse } from 'next'
import getNotionImage from '../../lib/notion/getNotionImage'
import { setHeaders, handleData, handleError } from '../../lib/notion/utils'

export default async function notionApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (setHeaders(req, res)) return
  try {
    const { imgUrl } = req.query as { imgUrl: string }
    const cleanQuery = { ...req.query }
    delete cleanQuery.imgUrl

    let data

    if (!imgUrl) {
      data = { status: 'error', message: 'image url missing' }
    } else {
      // we need to re-encode it since it's decoded when added to req.query
      return getNotionImage(res, encodeURIComponent(imgUrl), cleanQuery)
    }
    handleData(res, data)
  } catch (error) {
    handleError(res, error)
  }
}
