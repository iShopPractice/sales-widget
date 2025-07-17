import { useEffect } from 'react'

import { WidgetCard } from './features/widgets'
import { WidgetContext } from './context'
import { WidgetLayout } from '@/layouts'
import { useWidget } from '@/hooks'

const App = () => {
  const { loading, widgets, modify, toggleModify } = useWidget()

  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    setVH()
    window.addEventListener('resize', setVH)
    return () => window.removeEventListener('resize', setVH)
  }, [])

  return (
    <WidgetContext.Provider value={{ modify }}>
      <WidgetLayout loading={loading} onClick={toggleModify}>
        {widgets.map(data => (
          <WidgetCard key={data.id} data={data} />
        ))}
      </WidgetLayout>
    </WidgetContext.Provider>
  )
}

export default App
