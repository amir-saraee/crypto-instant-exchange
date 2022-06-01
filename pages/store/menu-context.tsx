import React, { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const MenuContext = createContext<{
  menu: boolean
  toggleMenu: () => void
}>({
  menu: false,
  toggleMenu: () => {}
})

export const MenuContextProvider: React.FC<{ children?: React.ReactNode }> = ({
  children
}) => {
  const [activeMenu, setActiveMenu] = useState(false)
  const router = useRouter()

  const toggleMenu = () => setActiveMenu((prevState) => !prevState)

  useEffect(() => {
    const handleRouteChange = () => {
      setActiveMenu(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return (
    <MenuContext.Provider value={{ menu: activeMenu, toggleMenu: toggleMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContext
