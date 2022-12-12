import useSWR from 'swr'

export default function useMusic(wallet: string) {
  const key = `/api/user/${wallet}/tracks`
  const { data: tracks, error } = useSWR(key)
  return { tracks, isLoading: !error && !tracks }
}
