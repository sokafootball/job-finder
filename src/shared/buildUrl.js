import { CLIENT_ID } from '../../shared/credentials'

export const buildUrl = (
  keyword,
  location
  // radius,
  // days,
  // sortColumns,
  // sortOrder,
  // startRow,
  // pageSize
) => {
  const radius = 20
  const days = 20
  const sortColumns = 'accquisitiondate'
  const sortOrder = 'ASC'
  const startRow = 1
  const pageSize = 20
  const userId = CLIENT_ID
  const herokuAppUrl = 'https://laurent-cors-proxy.herokuapp.com/'
  const apiUrl = `https://api.careeronestop.org/v1/jobsearch/${userId}/${keyword}/${location}/${radius}/${sortColumns}/${sortOrder}/${startRow}/${startRecord}/${pageSize}/${days}`
  const finalUrl = `${herokuAppUrl}${apiUrl}`
  return finalUrl
}
