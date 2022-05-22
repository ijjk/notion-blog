import { mapNotionDatabaseToPreviewList } from "../lib/notion/mapNotionPropertiesToValue"
import { notionClient } from "../lib/notion/notionClient"

type Podcast = {
  title: string
  description: string
}

export const database_id = process.env.PODCAST_INDEX_ID

export default function PodcastList({ podcastTable }: { podcastTable: Podcast[] }) {
  return <ul>{podcastTable.map(({ description, title }) => {
    return <li key={title}> {title} - {description}</li>
  })}</ul>
}

export async function getStaticProps() {
  const response = await notionClient.databases.query({
    database_id,
  })
  const podcastTable: Podcast[] = mapNotionDatabaseToPreviewList(response)

  return {
    props: {
      podcastTable,
    }
  }
}