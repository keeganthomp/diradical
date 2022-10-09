import { useRouter } from 'next/router'

const useRefresh = () => {
  const router = useRouter()
  const refresh = () => router.replace(router.asPath)

  return refresh
}

export default useRefresh
