import BaseModal from './Base'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'
import modalState, { ModalType } from 'atoms/modal'

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SignupButton = styled.a`
  text-decoration: ${(p) => (p.active ? 'underline' : 'none')};
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #000;
  border-radius: 20px;
  padding: 0 14px;
  z-index: 10;
  transition: opacity 0.1s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`

const LoginLink = styled.a`
  margin-top: 10px;
  text-decoration: underline;
  font-size: 14px;
  &:visited {
    color: #fff;
  }
`

function LoginModal({ onClose }: { onClose: () => void }) {
  const { type } = useRecoilValue(modalState)
  const message = () => {
    switch (type) {
      case ModalType.UPLOAD:
        return 'You must be logged in to upload a song.'
      case ModalType.MAKE_SONG_AVAILABLE:
        return 'You must be logged in to make a song available.'
      case ModalType.PURCHASE_SHARES:
        return 'You must be logged in to purchase ownership.'
    }
  }
  return (
    <BaseModal onClose={onClose}>
      <Container>
        <p>{message()}</p>
        <SignupButton href='/api/auth/signup'>Signup</SignupButton>
        <LoginLink href='/api/auth/login'>Login</LoginLink>
      </Container>
    </BaseModal>
  )
}

export default LoginModal
