import React from 'react'

export default function useOutsideClick(callback: () => void) {
  const ref = React.useRef()

  React.useEffect(() => {
    const handleClick = (event) => {
      const currentRef: any = ref.current
      if (currentRef && !currentRef.contains(event.target)) {
        callback()
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [ref])

  return ref
}
