import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from './dataTypes'
import { buildUrl } from '../../shared/buildUrl'

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
