import styled from 'styled-components'
import { HiDotsVertical } from 'react-icons/hi'
import { useRouter } from 'next/router'
import { TrackWithArtist } from 'types'
import activeMenuState from 'atoms/audioMenu'
import { useRecoilState } from 'recoil'
import { useRef, useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import axios from 'axios'
import modalState, { ModalType } from 'atoms/modal'
import { useQueryClient } from 'react-query'

type Props = {
  track: TrackWithArtist
  isOpenToPublic: boolean
  refetch?: () => void
}

const MENU_ITEM_CLASS = 'menu-item'

const MenuIconWrapper = styled.div`
  position: absolute;
  top: 3px;
  right: 3px;
  z-index: 9;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  opacity: 0.6;
  transition: opacity 0.1s ease-in-out;
  border: 1px solid white;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.4);
  &:hover {
    opacity: 0.8;
  }
`
const MenuIcon = styled(HiDotsVertical)`
  color: #fff;
`

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
const MenuItem = styled.p<{ color?: string; disabled?: boolean }>`
  color: ${(p) => p.color || '#000'};
  font-weight: 300;
  font-size: 13px;
  margin: 0;
  padding: 2px 0.5rem;
  border-bottom: 1px solid #e5e1e6;
  text-transform: lowercase;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    text-decoration: underline;
  }
`

export default function AudioCardMenu({
  track,
  isOpenToPublic,
  refetch,
}: Props) {
  const [isArchived, setArchived] = useState(track.archived)
  const queryClient = useQueryClient()
  const setModal = useSetRecoilState(modalState)
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

  const handleMenuToggle = () => {
    if (isOpen) {
      setActiveMenu({ id: '' })
    } else {
      setActiveMenu({ id: track.id })
    }
  }

  const handleArchive = async () => {
    await axios.post(`/api/tracks/${track.id}/archive`)
    queryClient.invalidateQueries(['tracks', 'userTracks'])
    setArchived(!isArchived)
    console.log('refetch', refetch)
    if (refetch) refetch()
  }

  const openSongModal = () =>
    setModal({ type: ModalType.MAKE_SONG_AVAILABLE, state: { track } })

  return (
    <>
      <MenuIconWrapper onClick={handleMenuToggle}>
        <MenuIcon />
      </MenuIconWrapper>
      {isOpen && (
        <MenuWrapper ref={menuRef}>
          {!isOpenToPublic && (
            <MenuItem onClick={openSongModal} className={MENU_ITEM_CLASS}>
              Open to investors
            </MenuItem>
          )}
          <MenuItem
            onClick={handleArchive}
            color={!isArchived ? 'red' : '#000'}
            className={MENU_ITEM_CLASS}
          >
            {isArchived ? 'unarchive' : 'Archive'}
          </MenuItem>
        </MenuWrapper>
      )}
    </>
  )
}
