import { useEffect, useRef } from 'react'

import { Button, Card } from '../../components'
import style from './WidgetLayout.module.css'
import Assets from './assets'

interface Props {
  loading?: boolean
  children?: React.ReactNode
}

const WidgetLayout = ({ loading, children }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null)

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
      <Button className={style.button} leftIcon unfilled icon={Assets.edit} value="Editar" />
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
      </div>
    </article>
  )
}

export default WidgetLayout
