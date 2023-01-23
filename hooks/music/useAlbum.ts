import useSWR from 'swr'

export default function useAlbum(albumId: string) {
  const { data, error, mutate } = useSWR(`/api/albums/${albumId}`, {
    refreshInterval: 3000,
  })
  return {
    album: data,
    isFetching: !error && !data,
    mutate,
    error,
  }
}
