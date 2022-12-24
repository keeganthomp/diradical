import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import React from 'react'
import { devices } from 'styles/theme'
import MobileMenu from './Menu'

const Container = styled.div`
  grid-area: mobile-navbar;
  background: #fff;
  box-shadow: 6px 5px 28px -16px rgba(0, 0, 0, 0.75);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: none;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.5rem;
  margin-bottom: 10px;
  @media ${devices.mobile} {
    display: flex;
  }
`

const Hamburger = styled(FaBars)`
  color: #000;
  position: absolute;
  right: 1rem;
`

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Container>
        <p>DIERAD</p>
        <Hamburger onClick={() => setIsOpen(true)} />
      </Container>
      <MobileMenu isOpen={isOpen} close={() => setIsOpen(false)} />
    </>
  )
}
