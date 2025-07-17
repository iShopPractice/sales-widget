import { useEffect, useState, useCallback } from 'react'

import { widgetData, widgetVisibleData } from '@/data'
import { WidgetDTO } from '@/models'

const useWidget = () => {
  const [widgets, setWidgets] = useState<WidgetDTO[]>([])
  const [loading, setLoading] = useState(true)
  const [modify, setModify] = useState(false)

  const fetchWidgets = useCallback(() => {
    setLoading(true)

    const timer = setTimeout(() => {
      const visibles = widgetData.filter(w => widgetVisibleData.some(item => item.widgetId === w.id))
      setWidgets(visibles)
      setLoading(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const cleanup = fetchWidgets()
    return cleanup
  }, [fetchWidgets])

  const toggleModify = () => setModify(m => !m)

  return {
    widgets,
    loading,
    modify,
    toggleModify,
  }
}

export default useWidget
