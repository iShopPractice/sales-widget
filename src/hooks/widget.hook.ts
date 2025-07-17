import { useEffect, useState, useCallback } from 'react'

import { WidgetDTO } from '@/models'
import { widgetData } from '@/data'

const useWidget = () => {
  const [widgets, setWidgets] = useState<WidgetDTO[]>([])
  const [loading, setLoading] = useState(true)
  const [modify, setModify] = useState(false)

  const fetchWidgets = useCallback(() => {
    setLoading(true)

    const timer = setTimeout(() => {
      setWidgets(widgetData)
      setLoading(false)
    }, 1500)

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
