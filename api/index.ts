export enum API_Endpoint {
  TRACKS = '/api/tracks',
  USER_TRACKS = '/api/tracks/user',
  USER = '/api/user',
}

const fetchTracks = () => fetch(API_Endpoint.TRACKS).then((res) => res.json())
const fetchUserTracks = () =>
  fetch(API_Endpoint.USER_TRACKS).then((res) => res.json())
const fetchUser = () => fetch(API_Endpoint.USER).then((res) => res.json())
const fetchWalletBalance = (walletAddress: string) =>
  fetch(
    `https://algoindexer.testnet.algoexplorerapi.io/v2/accounts/${walletAddress}`,
  ).then((res) => res.json())

const API = {
  fetchTracks,
  fetchUserTracks,
  fetchUser,
  fetchWalletBalance,
}

export default API
