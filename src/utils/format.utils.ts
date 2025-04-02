export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
  }).format(price);
};

export const formatNumber = (number: number) => {
  return new Intl.NumberFormat("vi-VN", {
    minimumFractionDigits: 0,
  }).format(number);
};
