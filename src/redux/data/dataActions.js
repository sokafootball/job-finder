import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from './dataTypes'

const fetchDataSuccess = () => {
  type: FETCH_DATA_SUCCESS
}

const fetchDataFailure = () => {
  type: FETCH_DATA_FAILURE
}

const fetchData = (dispatch) => {}
fetch(url)
  .then((response) => {
    response.json().then((data) => dispatch(fetchDataSuccess(data)))
  })
  .catch(() => {
    dispatch(fetchDataFailure())
  })

export { fetchData, fetchDataSuccess, fetchDataFailure }
