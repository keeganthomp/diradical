import useSWR from 'swr'

export default function useUserMusic(username: string) {
  const {
    data: tracks,
    error,
    mutate,
  } = useSWR(username ? `/api/users/${username}/tracks` : null, {
    refreshInterval: 3000,
  })
  return {
    tracks,
    isFetching: !error && !tracks,
    mutate,
    error,
  }
}
