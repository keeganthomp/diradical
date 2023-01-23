import useSWR from 'swr'

export default function useUserMusic(username: string) {
  const { data, error, mutate } = useSWR(
    username ? `/api/users/${username}/tracks` : null,
    {
      refreshInterval: 3000,
    },
  )
  return {
    ...data,
    isFetching: !error && !data,
    mutate,
    error,
  }
}
