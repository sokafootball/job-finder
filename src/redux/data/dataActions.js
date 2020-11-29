import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from './dataTypes'

export const fetchDataSuccess = () => {
  return {
    type: FETCH_DATA_SUCCESS,
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
  // url += fullTime ? `&full_time=${fullTime}` : ''
  return url
}

export const fetchData = (description, location) => (dispatch) => {
  //wrappa in debounce
  fetch(buildUrl(description, location))
    .then((response) => {
      response.json().then((data) => dispatch(fetchDataSuccess(data)))
    })
    .catch((error) => {
      dispatch(fetchDataFailure(error))
    })
}
