import { useContext } from 'react'

import { WidgetContext } from '@/context'

const useWidgetContext = () => {
  const context = useContext(WidgetContext)

  if (!context) {
    throw new Error("Widget is being used outside it's provider")
  }

  return context
}

export default useWidgetContext
