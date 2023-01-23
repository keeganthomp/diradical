import useSWR from 'swr'

export default function useCatalog() {
  const { data, error, mutate } = useSWR('/api/tracks', {
    refreshInterval: 3000,
  })
  return {
    ...data,
    isFetching: !error && !data,
    mutate,
    error,
  }
}
