import useSWR from 'swr'

export default function useCatalog() {
  const {
    data: tracks,
    error,
    mutate,
  } = useSWR('/api/tracks', {
    refreshInterval: 7000,
  })
  return {
    tracks,
    isFetching: !error && !tracks,
    mutate,
    error,
  }
}
