import styled from 'styled-components'
import { HiDotsVertical } from 'react-icons/hi'
import { useRouter } from 'next/router'
import { TrackWithArtist } from 'types'
import activeMenuState from 'atoms/audioMenu'
import { useRecoilState } from 'recoil'
import { useRef, useEffect } from 'react'

type Props = {
  track: TrackWithArtist
}

const MENU_ITEM_CLASS = 'menu-item'

const MenuIconWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 1px;
  z-index: 9;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  opacity: 0.6;
  transition: opacity 0.1s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`
const MenuIcon = styled(HiDotsVertical)``

const MenuWrapper = styled.div`
  z-index: 9;
  position: absolute;
  top: 1.75rem;
  border: 1px solid #e5e1e6;
  border-radius: 5px;
  right: 7px;
  background: white;
  padding: 0 4px;
`
const MenuItem = styled.p`
  color: black;
  font-weight: 100;
  font-size: 12px;
  margin: 0;
  padding: 0.25rem 0.75rem;
  border-bottom: 1px solid #e5e1e6;
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    text-decoration: underline;
  }
`

export default function AudioCardMenu({ track }: Props) {
  const menuRef = useRef<HTMLDivElement>(null)
  const [activeMenu, setActiveMenu] = useRecoilState(activeMenuState)
  const router = useRouter()
  const isProfilePage = router.pathname === '/profile'

  const isOpen = activeMenu?.id === track.id

  if (!isProfilePage) return null

  const handleClickOutside = (e) => {
    if (
      !menuRef?.current?.contains(e.target) &&
      !e.target.classList.value.includes(MENU_ITEM_CLASS)
    ) {
      setActiveMenu({ id: '' })
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  })

  const handleClick = () => {
    if (isOpen) {
      setActiveMenu({ id: '' })
    } else {
      setActiveMenu({ id: track.id })
    }
  }

  return (
    <>
      <MenuIconWrapper onClick={handleClick}>
        <MenuIcon />
      </MenuIconWrapper>
      {isOpen && (
        <MenuWrapper ref={menuRef}>
          <MenuItem className={MENU_ITEM_CLASS}>weee</MenuItem>
          <MenuItem className={MENU_ITEM_CLASS}>weee</MenuItem>
          <MenuItem className={MENU_ITEM_CLASS}>weee</MenuItem>
        </MenuWrapper>
      )}
    </>
  )
}
