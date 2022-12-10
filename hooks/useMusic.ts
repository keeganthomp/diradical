import useSWR from 'swr'

export default function useMusic(wallet?: string) {
  const key = wallet ? `/api/user/${wallet}/tracks` : '/api/tracks'
  const { data: tracks, error } = useSWR(key)
  return { tracks, isLoading: !error && !tracks }
}
