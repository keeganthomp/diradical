import React from 'react'
import styled from 'styled-components'
import { devices } from 'styles/theme'
import useCatalog from 'hooks/music/useCatalog'
import Loader from 'components/ui/Loader'
import AudioRow from 'components/audio/AudioRow'
import useUser from 'hooks/useUser'
import { useRouter } from 'next/router'

const Container = styled.div`
  overflow-y: scroll;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media ${devices.mobile} {
    overflow: hidden;
    padding-bottom: 10px;
  }
`

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function ListenPage() {
  const router = useRouter()
  const { singles, albums, isFetching } = useCatalog()
  const { isAuthenticating, isAuthenticated } = useUser()

  React.useEffect(() => {
    if (!isAuthenticating && !isAuthenticated) {
      router.push('/signin')
    }
  }, [isAuthenticating])

  if (!isAuthenticated) return null

  if (isFetching)
    return (
      <LoadingContainer>
        <Loader color='#000' />
      </LoadingContainer>
    )

  return (
    <Container>
      <AudioRow title='Singles' tracks={singles} />
      <AudioRow title='Albums' albums={albums} />
    </Container>
  )
}
