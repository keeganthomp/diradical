const callApi = async (url: string, options: RequestInit = {}) => {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('didToken')}`,
      'Content-Type': 'application/json',
    },
    ...options,
  })
  const json = await res.json()
  if (res.ok) {
    return json
  } else {
    throw new Error(json.message)
  }
}

const useApi = () => {
  const register = (wallet: string, membershipExp: number) =>
    callApi('/api/user', {
      method: 'POST',
      body: JSON.stringify({ wallet, membershipExp }),
    })
  const addVote = (voterWallet: string, artist: string, period: number) =>
    callApi('/api/vote', {
      method: 'POST',
      body: JSON.stringify({ voterWallet, artist, period }),
    })
  const addPayout = (wallet: string, amount: number, period: number) =>
    callApi('/api/payout', {
      method: 'POST',
      body: JSON.stringify({ wallet, amount, period }),
    })
  const addSong = ({
    songId,
    title,
    audioIPFSCid,
    coverArtIPFSCid,
    wallet,
  }: {
    songId: number
    title: string
    audioIPFSCid: string
    coverArtIPFSCid: string
    wallet: string
  }) => {
    callApi('/api/tracks/upload', {
      method: 'POST',
      body: JSON.stringify({
        songId,
        title,
        audioIPFSCid,
        coverArtIPFSCid,
        wallet,
      }),
    })
  }

  return {
    register,
    addVote,
    addPayout,
    addSong,
  }
}

export default useApi
