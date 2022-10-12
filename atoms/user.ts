import { Track, User } from '@prisma/client'
import { atom } from 'recoil'

const userState = atom({
  key: 'activeAudioId',
  default: null as
    | null
    | (Partial<User> & { wallet: string | null; tracks: Track[] }),
})

export default userState
