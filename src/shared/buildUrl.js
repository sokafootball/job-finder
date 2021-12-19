export const buildUrl = (
  userId,
  keyword,
  location,
  radius,
  days,
  sortColumns,
  sortOrder,
  startRow,
  pageSize
) => {
  const herokuAppUrl = 'https://laurent-cors-proxy.herokuapp.com/'
  const apiUrl = `https://api.careeronestop.org/v1/jobsearch/${userId}/${keyword}/${location}/${radius}/${sortColumns}/${sortOrder}/${startRow}/${startRecord}/${pageSize}/${days}`
  const finalUrl = `${herokuAppUrl}${apiUrl}`
  return finalUrl
}
