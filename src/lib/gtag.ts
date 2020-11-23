export const GA_ID: string = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

export const isExistedGaId: boolean = GA_ID !== ''

export const pageview = (url: URL) => {
  window.gtag('config', GA_ID, {
    page_path: url,
  })
}

type GTagEvent = {
  action: string
  category: string
  label: string
  value: number
}

export const event = ({ action, category, label, value }: GTagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
