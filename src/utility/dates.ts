type TDate = Date | string

export const shortDate = (date: TDate) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

export const afterToday = (date: TDate) => {
  const today = shortDate(new Date())
  return date >= today
}

export const areDatesEqual = (first: TDate, second: TDate) => {
    return shortDate(first) === shortDate(second)
}
