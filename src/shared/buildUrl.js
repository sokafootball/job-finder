import { CLIENT_ID } from './constants'

export const buildUrl = (keywordParam, locationParam) => {
  const keyword = keywordParam ? keywordParam : 'Programming'
  const location = locationParam ? locationParam : 'US'
  const radius = 20
  const days = 20
  const sortColumns = 'accquisitiondate'
  const sortOrder = 'DESC'
  const startRow = 1
  const pageSize = 20
  const userId = CLIENT_ID
  const herokuAppUrl = 'https://laurent-cors-proxy.herokuapp.com/'
  const apiUrl = `https://api.careeronestop.org/v1/jobsearch/${userId}/${keyword}/${location}/${radius}/${sortColumns}/${sortOrder}/${startRow}/${pageSize}/${days}`
  const finalUrl = `${herokuAppUrl}${apiUrl}`
  return finalUrl
}
