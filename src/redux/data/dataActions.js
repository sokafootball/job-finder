import { buildUrl } from '../../shared/buildUrl'
import { createAction } from '@reduxjs/toolkit'

export const fetchDataSuccess = createAction('FETCH_DATA_SUCCESS')
export const fetchDataFailure = createAction('FETCH_DATA_FAILURE')

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
