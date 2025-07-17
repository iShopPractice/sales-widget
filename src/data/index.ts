import { WidgetDTO, WidgetVisibleDTO } from '@/models'

const widgetData: Array<WidgetDTO> = [
  {
    id: '80a9f858-e6f5-4d5f-bf3f-0e4b74a22a11',
    value: 1284,
    variation: 8.2,
    key: 'box',
    text: 'Total de órdenes',
    widgetVariation: 'units',
  },
  {
    id: '07f9d108-d514-429b-a6b2-313e56f68839',
    value: 218400,
    variation: 12.5,
    key: 'money',
    text: 'Total de ventas',
    widgetVariation: 'number',
  },
  {
    id: 'c97c5d98-9182-44cf-a960-d5c3a5debb60',
    value: 170.3,
    variation: -3.1,
    key: 'graph',
    text: 'Ticket promedio',
    widgetVariation: 'number',
  },
  {
    id: '16737c11-4b6c-4c02-9283-71e419c4603c',
    value: 145,
    variation: 2.2,
    key: 'box',
    widgetVariation: 'units',
    text: 'Productos activos',
  },
  {
    id: '1b15aa3a-2a91-4075-a39a-70cb4bfa1f25',
    value: 5,
    variation: 0,
    text: 'Más vendidos',
    widgetVariation: 'units',
    key: 'trophy',
  },
  {
    id: 'b4cd87bc-b7ee-4268-b5a1-82666ed29d7a',
    value: 12,
    variation: 3.6,
    text: 'Nuevos productos',
    widgetVariation: 'units',
    key: 'star',
  },
]

const widgetVisibleData: Array<WidgetVisibleDTO> = [
  {
    id: 'f4f0b1c8-2a84-4c62-bcc3-9a7fd44f4fa4',
    widgetId: '80a9f858-e6f5-4d5f-bf3f-0e4b74a22a11',
    order: 0,
  },
  {
    id: 'b38b6623-c3fd-41ef-94c1-7e37c9857f1a',
    widgetId: '07f9d108-d514-429b-a6b2-313e56f68839',
    order: 1,
  },
  {
    id: '2dc82e99-4b36-4b4b-9f4f-0a379d3a6a1f',
    widgetId: 'c97c5d98-9182-44cf-a960-d5c3a5debb60',
    order: 2,
  },
]

export { widgetData, widgetVisibleData }
