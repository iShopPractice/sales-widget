import { useEffect, useRef } from 'react'

import { Button, Card } from '@/components'
import { useWidgetContext } from '@/hooks'

import style from './WidgetLayout.module.css'
import Assets from './assets'

interface Props {
  loading?: boolean
  onClick?: () => void
  children?: React.ReactNode
}

const WidgetLayout = ({ loading, children, onClick }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const { modify } = useWidgetContext()

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollLeft = 0
    }
  }, [children])

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (ref.current) {
        event.preventDefault()
        ref.current.scrollLeft += event.deltaY
      }
    }

    const listElement = ref.current
    listElement?.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      listElement?.removeEventListener('wheel', handleWheel)
    }
  }, [children])

  return (
    <article className={style.article}>
      {modify && (
        <Button className={style.button} leftIcon unfilled icon={Assets.edit} value="Editar" onClick={onClick} />
      )}
      <div className={style.container}>
        <div className={style.content} ref={ref}>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <Card className={style.card} key={i}>
                  <div className={style.image}></div>
                  <div className={style.data}>
                    <div className={style.shape}></div>
                    <div className={style.shape}></div>
                  </div>
                  <div className={style.variation}>
                    <div className={style.shapeIcon}></div>
                    <div className={style.shape}></div>
                  </div>
                </Card>
              ))
            : children}
        </div>
        <div className={`${style.bgModify} ${modify ? style.show : ''}`}></div>
      </div>
    </article>
  )
}

export default WidgetLayout
