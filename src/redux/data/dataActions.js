import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from './dataTypes'

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  }
}

export const fetchDataFailure = () => {
  return {
    type: FETCH_DATA_FAILURE,
  }
}

const buildUrl = (description, location) => {
  let url =
    'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?'
  url += description ? `&description=${description}` : ''
  url += location ? `&location=${location}` : ''
  return url
}

export const fetchData = (description, location) => async (dispatch) => {
  console.log(`fetching...`)
  try {
    const response = await fetch(buildUrl(description, location))
    const data = await response.json()
    dispatch(fetchDataSuccess(data))
  } catch (err) {
    dispatch(fetchDataFailure(err))
  }
}
