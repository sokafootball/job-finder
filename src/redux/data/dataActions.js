import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from './dataTypes'

const fetchDataSuccess = () => {
  return {
    type: FETCH_DATA_SUCCESS,
  }
}

const fetchDataFailure = () => {
  return {
    type: FETCH_DATA_FAILURE,
  }
}

const fetchData = () =>
  function (dispatch) {
    fetch(url)
      .then((response) => {
        response.json().then((data) => dispatch(fetchDataSuccess(data)))
      })
      .catch(() => {
        dispatch(fetchDataFailure())
      })
  }
export { fetchData, fetchDataSuccess, fetchDataFailure }
