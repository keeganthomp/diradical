import { randomUUID } from 'crypto'

const makeArray = (length = 15) => Array.from(Array(length).keys())

export const MOCK_USERS = makeArray().map((i) => ({
  id: i.toString(),
  username: `user${i}`,
  email: randomUUID() + '@test.com',
  stripeCustomerId: randomUUID(),
}))

export const MOCK_SINGLES = makeArray().map((i) => ({
  id: i.toString(),
  title: `Test Track ${i}`,
  art: 'https://picsum.photos/200/300',
  artistId: i.toString(),
  audio: 'https://assets.dierad.xyz/tracks/dfgfg_1674426608075/song6.mp3',
}))

export const MOCK_ALBUM_TRACKS = makeArray().map((i) => ({
  id: (i * 100).toString(),
  title: `Test Track ${i * 100}`,
  art: 'https://picsum.photos/200/300',
  artistId: i.toString(),
  audio: 'https://assets.dierad.xyz/tracks/dfgfg_1674426608075/song6.mp3',
}))

export const MOCK_ALBUMS = makeArray(5).map((i) => ({
  id: i.toString(),
  title: `Test Album ${i}`,
  art: 'https://picsum.photos/200/300',
  artistId: '1',
}))
