import useSWR from 'swr'
import { Season } from 'types'

export default function useSeason() {
  const { data: season, error, mutate } = useSWR<Season>(`/api/season`)
  return { season, isFetching: !season && !error, mutate, error }
}
