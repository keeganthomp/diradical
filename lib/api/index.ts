export enum API_Endpoint {
  TRACKS = '/api/tracks',
  CUSTODIAL_WALLET = '/api/custodial-wallet',
  REGISTER = '/api/register',
  USER = '/api/user',
  VOTE = '/api/vote',
}

const fetchTracks = () => fetch(API_Endpoint.TRACKS).then((res) => res.json())
const fetchUserTracks = (wallet: string) =>
  fetch(`/api/tracks/wallet/${wallet}`).then((res) => res.json())
const register = (wallet: string) =>
  fetch(API_Endpoint.REGISTER, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ wallet }),
  })
const updateUser = (wallet: string, membershipExp: number) =>
  fetch(API_Endpoint.USER, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ wallet, membershipExp }),
  })
const addVote = (wallet: string, trackId: string) =>
  fetch(API_Endpoint.VOTE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ wallet, trackId }),
  })

const API = {
  fetchTracks,
  fetchUserTracks,
  register,
  updateUser,
  addVote,
}

export default API
