if (!process.env.NOTION_TOKEN) {
  // We aren't able to build or serve images from Notion without the
  // NOTION_TOKEN being populated
  throw new Error(
    `NOTION_TOKEN is missing from env, this will result in an error\n` +
    `Make sure to provide one before starting Next.js`
  )
}

module.exports = {
  experimental: {
    catchAllRouting: false,
    granularChunks: true,
    css: true,
  },
}
