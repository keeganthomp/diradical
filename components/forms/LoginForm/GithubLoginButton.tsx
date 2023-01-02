import React from 'react'
import styled from 'styled-components'
import { Button } from 'components/ui/Buttons'
import { AiFillGithub } from 'react-icons/ai'
import useMagicWallet from 'hooks/useWallet'

const GithubButton = styled(Button)`
  width: 100%;
  background: #ebebeb;
  color: #000;
`

const Icon = styled(AiFillGithub)`
  margin-right: 0.5rem;
`

const GithubLoginButton = ({ disabled }: { disabled?: boolean }) => {
  const { loginWithGithub } = useMagicWallet()
  return (
    <GithubButton disabled={disabled} onClick={loginWithGithub}>
      <Icon />
      Login with Github
    </GithubButton>
  )
}

export default GithubLoginButton
