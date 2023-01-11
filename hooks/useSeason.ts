import useSWR from 'swr'

export default function useSeason() {
  const { data: season, error, mutate } = useSWR(`/api/season`)
  return { season, isFetching: !season && !error, mutate, error }
}
