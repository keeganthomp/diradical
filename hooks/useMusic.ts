import { TrackWithArtist } from 'types'
import { useQuery } from 'react-query'
import { CacheKey } from 'types'
import API from 'api'

export default function useMusic(user?: boolean) {
  return useQuery<TrackWithArtist[]>(
    user ? CacheKey.USER_TRACKS : CacheKey.TRACKS,
    user ? API.fetchUserTracks : API.fetchTracks,
    {
      refetchInterval: 20000,
    },
  )
}
