import { useEffect } from 'react'

import { WidgetLayout } from '@/layouts'
import { WidgetCard } from '@/features'
import { useWidget } from '@/hooks'

const App = () => {
  const { loading, widgets } = useWidget()

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
    <WidgetLayout loading={loading}>
      {widgets.map(data => (
        <WidgetCard key={data.id} data={data} />
      ))}
    </WidgetLayout>
  )
}

export default App
