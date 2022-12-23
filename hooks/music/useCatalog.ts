import useSWR from 'swr'

export default function useCatalog() {
  const { data: tracks, error, mutate } = useSWR('/api/tracks')
  return {
    tracks,
    isLoading: !error && !tracks,
    mutate,
    error,
  }
}
