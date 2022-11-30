import useSWR from 'swr'

export default function useMusic(wallet?: string) {
  const key = wallet ? `/api/tracks/wallet/${wallet}` : '/api/tracks'
  const { data: tracks, error } = useSWR(key)
  return { tracks, isLoading: !error && !tracks }
}
