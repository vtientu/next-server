import { ProductDocument } from '@/models/product'

export interface ProductWithDiscount extends ProductDocument {
  discount: {
    title: string
    type: 'percent' | 'fixed'
    value: number
  }
}
