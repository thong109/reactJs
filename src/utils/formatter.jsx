const formatter = (number) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(number);
}

const formatDateLocale = (dateString, locale = 'en-GB') => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Intl.DateTimeFormat(locale, options).format(date);
}

export { formatter, formatDateLocale };