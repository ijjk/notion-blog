import rpc from './rpc'

export default function queryCollection({
  collectionId,
  collectionViewId,
  loader = {},
  query = {},
}: any) {
  const queryCollectionBody = {
    loader: {
      type: 'reducer',
      reducers: {
        collection_group_results: {
          type: 'results',
          limit: 999,
          loadContentCover: true,
        },
        'table:uncategorized:title:count': {
          type: 'aggregation',
          aggregation: {
            property: 'title',
            aggregator: 'count',
          },
        },
      },
      searchQuery: '',
      userTimeZone: 'America/Phoenix',
    },
  }

  return rpc('queryCollection', {
    collectionId,
    collectionViewId,
    ...queryCollectionBody,
  })
}
