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
  const purchaseMembership = () =>
    callApi('/api/checkout/membership', { method: 'POST' })
  const registerArtist = () =>
    callApi('/api/register/artist', { method: 'POST' })
  const uploadSong = (formData: FormData) =>
    callApi('/api/tracks', { method: 'POST', body: formData })

  return {
    registerArtist,
    addVote,
    addPayout,
    uploadSong,
    purchaseMembership,
  }
}

export default useApi
