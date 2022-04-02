import actions from '../actions'

const reducer = (state, action) => {
  switch (action.type) {
  case actions.FETCH_DATA_START:
    return {
      ...state,
      status: 'loading',
    }
  case actions.FETCH_DATA_SUCSSES: {
    console.log(action.city)
    return {
      ...state,
      status: 'succeeded',
      city: action.city,
      wether: action.wether,
    }
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

  case actions.AUTOCOMPLETE_SUCSSES: {
    return {
      ...state,
      status: 'succeeded',
      wether: action.weather,
    }
  }
  case actions.AUTOCOMPLETE_FAILED:
    return {
      ...state,
      status: 'error',
    }
  default:
    return state
  }
}

export default reducer
