import { IconArrowUp } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

export default function ArrowUp() {

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    function userScroll() {
      setIsVisible(scrollY > 0)
    }

    window.addEventListener("scroll", userScroll)

    return () => window.removeEventListener("scroll", userScroll)
  }, [])

  function handleClick() {
    window.scrollTo(0, 0)
  }

  return (
    <>
      {isVisible && (
        <div className='fixed bottom-2 right-2 bg-zinc-300 p-1 rounded-full cursor-pointer' onClick={handleClick}>
          <IconArrowUp />
        </div>
      )}
    </>
  )
}