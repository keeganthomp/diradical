import { Puff } from 'react-loader-spinner'

const LOADER_SIZE = '40'

function Loader() {
  return (
    <Puff
      wrapperStyle={{ justifyContent: 'center' }}
      height={LOADER_SIZE}
      width={LOADER_SIZE}
      color='#fff'
    />
  )
}

export default Loader
