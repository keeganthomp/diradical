import DesktopAudioPlayer from './Desktop'
import MobileAudioPlayer from './Mobile'
import mobile from 'is-mobile'

export default function AudioPlayer() {
  const isMobile = mobile()
  return isMobile ? <MobileAudioPlayer /> : <DesktopAudioPlayer />
}
