import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import React from 'react'
import { devices } from 'styles/theme'
import { useRouter } from 'next/router'
import MobileMenu from './OverlayMenu'

const Container = styled.div`
  grid-area: mobile-navbar;
  background: #fff;
  box-shadow: 6px 5px 28px -16px rgba(0, 0, 0, 0.75);
  display: none;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.5rem;
  @media ${devices.mobile} {
    display: flex;
    box-shadow: none;
    position: absolute;
    width: 100%;
    left: 0;
    z-index: 10;
  }
`

const Hamburger = styled(FaBars)`
  color: #000;
  position: absolute;
  right: 1rem;
`

const Logo = styled.p``

export default function MobileNavbar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpen = () => {
    window.document.body.style.overflow = 'hidden'
    setIsOpen(true)
  }

  const handleClose = () => {
    window.document.body.style.overflow = 'initial'
    setIsOpen(false)
  }

  return (
    <>
      <Container>
        <Logo onClick={() => router.push('/')}>DIERAD</Logo>
        <Hamburger onClick={handleOpen} />
      </Container>
      <MobileMenu isOpen={isOpen} close={handleClose} />
    </>
  )
}
