const callApi = async (url: string, options: RequestInit = {}) => {
  const res = await fetch(url, {
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
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
    callApi('/api/tracks', { method: 'POST', body: formData, headers: {} })
  const initPlay = (trackId: string) =>
    callApi(`/api/tracks/${trackId}/playInit`, { method: 'POST' })
  const countPlay = (trackId: string) =>
    callApi(`/api/tracks/${trackId}/playComplete`, { method: 'POST' })
  const getTrack = (trackId: string) => callApi(`/api/tracks/${trackId}`)
  const archiveTrack = (trackId: string) =>
    callApi(`/api/tracks/${trackId}/archive`, { method: 'PUT' })
  const receivePayout = (userId: string) =>
    callApi(`/api/users/${userId}/payout`, { method: 'POST' })
  const registerUser = (email: string, username: string, password: string) =>
    callApi('/api/register', {
      method: 'POST',
      body: JSON.stringify({ email, username, password }),
    })

  return {
    registerUser,
    countPlay,
    registerArtist,
    addPayout,
    uploadSong,
    purchaseMembership,
    initPlay,
    getTrack,
    archiveTrack,
    receivePayout,
  }
}

export default useApi
