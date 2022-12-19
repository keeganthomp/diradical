const callApi = async (url: string, options: RequestInit = {}) => {
  const res = await fetch(url, options)
  const json = await res.json()
  if (res.ok) {
    return json
  } else {
    throw new Error(json.message)
  }
}

const useApi = () => {
  const fetchAllTracks = () => callApi('/api/tracks').then((res) => res.json())
  const fetchUserTracks = (wallet: string) =>
    callApi(`/api/user/${wallet}/tracks`).then((res) => res.json())
  const register = (wallet: string, membershipExp: number) =>
    callApi('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ wallet, membershipExp }),
    })
  const addVote = (voterWallet: string, artist: string, period: number) =>
    callApi('/api/vote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ voterWallet, artist, period }),
    })
  const addPayout = (wallet: string, amount: number, period: number) =>
    callApi('/api/payout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ wallet, amount, period }),
    })
  const fetchPayouts = (wallet: string) =>
    callApi(`/api/user/${wallet}/payouts`)

  return {
    fetchAllTracks,
    fetchUserTracks,
    register,
    addVote,
    addPayout,
    fetchPayouts,
  }
}

export default useApi
