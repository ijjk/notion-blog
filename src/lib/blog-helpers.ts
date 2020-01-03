export const getBlogLink = (slug: string) => {
  return `/blog${!slug.startsWith('/') ? '/' : ''}${slug}`
}
