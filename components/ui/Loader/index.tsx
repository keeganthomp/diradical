import { TailSpin } from 'react-loader-spinner'

function Loader({ size = 40, color = '#fff' }) {
  return (
    <TailSpin
      height={size}
      width={size}
      color={color}
      radius='1'
      wrapperClass=''
      wrapperStyle={{
        justifyContent: 'center',
      }}
      visible={true}
    />
  )
}

export default Loader
