import React, { useEffect } from 'react'
import useUser from 'hooks/useUser'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import PlayChart from 'components/season/PlayChart'

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`
const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 2rem;
`

export default function SeasonPage() {
  const router = useRouter()
  const { isAuthenticated, isAuthenticating, user } = useUser()

  useEffect(() => {
    if (!isAuthenticating && !isAuthenticated) {
      router.push('/signin')
    }
  }, [isAuthenticating])

  if (!user) return null

  return (
    <Wrapper>
      <Title>Listen Distribution</Title>
      <PlayChart />
    </Wrapper>
  )
}
