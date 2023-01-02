import React from 'react'
import styled from 'styled-components'
import { Button } from 'components/ui/Buttons'
import { FcGoogle } from 'react-icons/fc'
import useMagicWallet from 'hooks/useWallet'

const GoogleButton = styled(Button)`
  width: 100%;
  background: #ebebeb;
  color: #000;
`

const Icon = styled(FcGoogle)`
  margin-right: 0.5rem;
`

const GoogleLoginButton = ({ disabled }: { disabled?: boolean }) => {
  const { loginWithGoogle } = useMagicWallet()
  return (
    <GoogleButton disabled={disabled} onClick={loginWithGoogle}>
      <Icon />
      Login with Google
    </GoogleButton>
  )
}

export default GoogleLoginButton
