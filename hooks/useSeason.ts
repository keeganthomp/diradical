import useSWR from 'swr'
import { Season } from 'types'

export default function usePayouts() {
  const { data: season, error, mutate } = useSWR<Season>(`/api/season`)
  return { season, isFetching: !season && !error, mutate, error }
}
