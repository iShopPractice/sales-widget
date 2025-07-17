import { Card, Image } from '@/components'

import style from './WidgetCard.module.css'
import { WidgetDTO } from '@/models'
import svg, { Assets } from './assets'

interface Props {
  data: WidgetDTO
}

const WidgetCard = ({ data: { id, key, text, value, variation, widgetVariation } }: Props) => {
  const isNegative = variation < 0

  return (
    <Card className={style.card}>
      <Image alt={`widget-pic-${id}`} src={svg[key]} className={style.image} />
      <div className={style.content}>
        <h4 className={style.value}>
          {widgetVariation === 'number'
            ? new Intl.NumberFormat('es-AR', {
                style: 'currency',
                currency: 'ARS',
              }).format(value)
            : value}
        </h4>
        <span className={style.text}>{text}</span>
        <div className={`${style.variation} ${style[isNegative ? 'negative' : 'positive']}`}>
          <div className={style.icon}>{isNegative ? Assets.negative : Assets.positive}</div>
          <span>{isNegative ? variation : `${variation}`}%</span>
        </div>
      </div>
    </Card>
  )
}

export default WidgetCard
