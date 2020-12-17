import {
  useState,
} from 'react'

const useCustom = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setDrawerOpen(!drawerOpen)
  }

  return {
    handler: {
      toggleDrawer,
    },
    state: {
      drawerOpen,
    },
  }
}

export default useCustom
