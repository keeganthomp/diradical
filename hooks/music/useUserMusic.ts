import useSWR from 'swr'

export default function useUserMusic(wallet: string) {
  const {
    data: tracks,
    error,
    mutate,
  } = useSWR(wallet ? `/api/user/${wallet}/tracks` : null, {
    refreshInterval: 7000,
  })
  return {
    tracks,
    isFetching: !error && !tracks,
    mutate,
    error,
  }
}
