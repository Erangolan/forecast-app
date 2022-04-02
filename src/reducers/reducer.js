import actions from '../actions'

const reducer = (state, action) => {
  switch (action.type) {
  case actions.FETCH_DATA_START:
    return {
      ...state,
      status: 'loading',
    }
  case actions.FETCH_DATA_FAILED:
    return {
      ...state,
      status: 'error',
      message: action.message,
    }
  case actions.FETCH_FORECAST_SUCSSES:
    return {
      ...state,
      status: 'succeeded',
      wether: action.wether,
      city: action.city,
    }
  default:
    return state
  }
}

export default reducer
