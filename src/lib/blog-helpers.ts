export const getBlogLink = (slug: string) => {
  return `/blog${!slug.startsWith('/') ? '/' : ''}${slug}`
}

export const getDateStr = (date) => {
  return new Date(date)
    .toLocaleString('en-US', {
      month: 'long',
      day: '2-digit',
      year: 'numeric'
    })
}
