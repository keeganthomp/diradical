import React, { useEffect } from 'react'
import styled from 'styled-components'
import AudioGrid from 'components/audio/AudioGrid'
import { devices } from 'styles/theme'
import useCatalog from 'hooks/music/useCatalog'
import Loader from 'components/ui/Loader'
import useMagicWallet from 'hooks/useWallet'
import { useRouter } from 'next/router'

const Container = styled.div`
  overflow-y: auto;
  padding-bottom: 4.5rem;
  height: 100%;
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
  const { tracks, isFetching } = useCatalog()
  const { getRedirectResult } = useMagicWallet()
  const router = useRouter()
  const isFromSocialLogin = Boolean(router.query.magic_credential)

  useEffect(() => {
    const asyncGetCreds = async () => {
      const credentials = await getRedirectResult()
      console.log(credentials)
    }
    if (isFromSocialLogin) {
      asyncGetCreds()
    }
  }, [isFromSocialLogin])

  if (isFetching)
    return (
      <LoadingContainer>
        <Loader color='#000' />
      </LoadingContainer>
    )

  return (
    <Container>
      <AudioGrid tracks={tracks} />
    </Container>
  )
}
