import styled from 'styled-components'
import { useState } from 'react'
import { BsChevronCompactUp } from 'react-icons/bs'
import useOutsideClick from 'hooks/useClickOutside'
import { signOut } from 'next-auth/react'
import useUser from 'hooks/useUser'

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  overflow: hidden;
`

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 2rem 1fr;
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
  flex-basis: 2rem;
  border: 1px solid #b9b9b997;
`

const MetaData = styled.div`
  width: 100%;
  display: flex;
`

const MenuContainer = styled.div<{ open?: boolean }>`
  text-align: center;
  font-size: 14px;
  padding: 0.5rem 0;
  padding: 10px;
  position: relative;
  bottom: ${(p) => (p.open ? 0 : '-8rem')};
  transition: all 0.2s ease-in-out;
  z-index: 1;
`

const Username = styled.p`
  font-size: 12px;
`

const Chevron = styled(BsChevronCompactUp)<{ open?: boolean }>`
  ${({ open }) => open && 'transform: rotate(180deg);'}
  transition: all 0.15s ease-in-out;
  color: #a5a5a5b0;
  flex-grow: 1;
`

function UserInfo() {
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
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </MenuContainer>
      <Container onClick={toggleOpen}>
        <ProfilePicture />
        <MetaData>
          <Username>{user?.username}</Username>
          <Chevron open={isOpen} />
        </MetaData>
      </Container>
    </Wrapper>
  )
}

export default UserInfo
