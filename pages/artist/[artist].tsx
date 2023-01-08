import React from 'react'
import styled from 'styled-components'
import AudioGrid from 'components/audio/AudioGrid'
import { Button } from 'components/ui/Buttons'
import { useRouter } from 'next/router'
import useUserMusic from 'hooks/music/useUserMusic'
import Loader from 'components/ui/Loader'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Heading = styled.h3`
  font-weight: 200;
  margin: 0;
`

const VoteButton = styled(Button)`
  width: 10rem;
  margin: 1rem 0;
`

export default function ArtistPage() {
  const router = useRouter()
  const artist = router.query.artist

  const { tracks, isFetching } = useUserMusic(artist as string)

  const handleVote = async () => {
    console.log('done voting')
  }

  if (isFetching) return <Loader color='#000' />

  return (
    <Container>
      <VoteButton onClick={handleVote}>Vote</VoteButton>
      <AudioGrid tracks={tracks} />
    </Container>
  )
}
