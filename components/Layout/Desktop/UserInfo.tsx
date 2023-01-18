import styled from 'styled-components'
import { useState } from 'react'
import { IoIosArrowDropup } from 'react-icons/io'
import useOutsideClick from 'hooks/useClickOutside'
import { signOut } from 'next-auth/react'
import useUser from 'hooks/useUser'
import { useRouter } from 'next/router'

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  overflow: hidden;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-top: 1px solid #f0f0f0;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  position: relative;
  background: white;
  z-index: 2;
  &:hover {
    background: #f8f8f8;
  }
`
const Item = styled.p`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const LogoutButton = styled.p`
  color: red;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const ProfilePicture = styled.div`
  background: ${({ theme }) => theme.colors.main};
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 1px solid #b9b9b997;
`

const MenuContainer = styled.div<{ open?: boolean }>`
  text-align: center;
  font-size: 14px;
  padding: 0.5rem 0;
  padding: 10px;
  position: relative;
  bottom: ${(p) => (p.open ? 0 : '-9rem')};
  transition: all 0.2s ease-in-out;
  z-index: 1;
  display: grid;
  grid-gap: 0.5rem;
`

const Username = styled.p`
  font-size: 12px;
`

const Chevron = styled(IoIosArrowDropup)<{ open?: boolean }>`
  ${({ open }) => open && 'transform: rotate(180deg);'}
  transition: all 0.15s ease-in-out;
  color: #202020ad;
`

function UserInfo() {
  const router = useRouter()
  const { isAuthenticated, user } = useUser()
  const [isOpen, setOpen] = useState(false)

  const ref = useOutsideClick(() => setOpen(false))

  const toggleOpen = () => setOpen(!isOpen)
  const handleLogout = () => {
    signOut({
      callbackUrl: `${window.location.origin}/signin`,
    })
  }

  if (!isAuthenticated) return null

  return (
    <Wrapper ref={ref}>
      <MenuContainer open={isOpen}>
        <Item onClick={() => router.push('/my-music')}>My Music</Item>
        <Item onClick={() => router.push('/payouts')}>Payouts</Item>
        <Item onClick={() => router.push('/season')}>Season</Item>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </MenuContainer>
      <Container onClick={toggleOpen}>
        <ProfilePicture />
        <Username>{user?.username}</Username>
        <Chevron open={isOpen} />
      </Container>
    </Wrapper>
  )
}

export default UserInfo
