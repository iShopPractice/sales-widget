import { createContext } from 'react'

export interface WidgetContextShape {
  modify: boolean
}

const WidgetContext = createContext<WidgetContextShape | undefined>(undefined)

export default WidgetContext
