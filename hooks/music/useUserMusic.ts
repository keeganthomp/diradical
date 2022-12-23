import useSWR from 'swr'

export default function useUserMusic(wallet: string) {
  const { data: tracks, error, mutate } = useSWR(`/api/user/${wallet}/tracks`)
  return {
    tracks,
    isLoading: !error && !tracks,
    mutate,
    error,
  }
}
