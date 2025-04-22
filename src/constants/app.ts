export enum DISCOUNT_TYPE {
  PERCENT = 'percent',
  FIXED = 'fixed'
}

export enum DISCOUNT_APPLY_TO {
  ALL = 'all',
  CATEGORY = 'category',
  PRODUCT = 'product'
}

export enum ORDER_STATUS {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled'
}

export enum PAYMENT_STATUS {
  PENDING = 'pending',
  PAID = 'paid',
  FAILED = 'failed'
}

export enum PAYMENT_METHOD {
  COD = 'cod',
  VNPAY = 'vnpay',
  MOMO = 'momo'
}
