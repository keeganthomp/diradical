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
  const addVote = (wallet: string, trackId: number, period: number) =>
    callApi('/api/vote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ wallet, trackId, period }),
    })

  return {
    fetchAllTracks,
    fetchUserTracks,
    register,
    addVote,
  }
}

export default useApi
