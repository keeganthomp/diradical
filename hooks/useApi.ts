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
  const initPlay = (trackId: string) =>
    callApi(`/api/tracks/${trackId}/playInit`, { method: 'POST' })
  const countPlay = (trackId: string) =>
    callApi(`/api/tracks/${trackId}/playComplete`, { method: 'POST' })
  const getTrack = (trackId: string) => callApi(`/api/tracks/${trackId}`)
  const archiveTrack = (trackId: string) =>
    callApi(`/api/tracks/${trackId}/archive`, { method: 'PUT' })

  return {
    countPlay,
    registerArtist,
    addPayout,
    uploadSong,
    purchaseMembership,
    initPlay,
    getTrack,
    archiveTrack,
  }
}

export default useApi
