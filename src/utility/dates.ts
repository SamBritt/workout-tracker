type TDate = Date | string

export const shortDate = (date: TDate, options: null | Intl.DateTimeFormatOptions = null) => {
  if (!options) {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
  return new Date(date).toLocaleDateString('en-US', options)
}

export const afterToday = (date: TDate) => {
  const today = shortDate(new Date())
  return date >= today
}

export const areDatesEqual = (first: TDate, second: TDate) => {
  return shortDate(first) === shortDate(second)
}

export const getMondaysDate = () => {
  const currentDate = new Date()
  const currentDayOfWeek = currentDate.getDay()
  const daysToSubtract = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1

  currentDate.setDate(currentDate.getDate() - daysToSubtract)

  return shortDate(currentDate)
}

export const getSundaysDate = () => {
  const currentDate = new Date()
  const currentDayOfWeek = currentDate.getDay()
  const daysToSubtract = currentDayOfWeek === 0 ? 0 : 7 - currentDayOfWeek

  currentDate.setDate(currentDate.getDate() + daysToSubtract)

  return shortDate(currentDate)
}
