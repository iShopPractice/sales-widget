type WidgetVariation = 'number' | 'units'

interface WidgetDTO {
  readonly id: string
  key: string
  text: string
  value: number
  variation: number
  widgetVariation: WidgetVariation
}

interface WidgetVisibleDTO {
  readonly id: string
  widgetId: string
  order: number
}

export type { WidgetDTO, WidgetVariation, WidgetVisibleDTO }
