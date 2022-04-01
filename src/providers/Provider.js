/* eslint-disable no-unused-vars */
import { createContext, useReducer } from 'react'
import actions from '../actions'
import reducer from '../reducers/reducer'
export const WeatherContext = createContext()

export const initialState = {
  wether: [],
  status: 'idle',
  city: '',
  message: '',
  units: 'celsius',
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = {
    wether: state.wether,
    status: state.status,
    city: state.city,
    message: state.message,
    startFetching: () => {
      dispatch({ type: actions.FETCH_DATA_START })
    },
    fetchForecastSuccess: (wether, city) => {
      dispatch({ type: actions.FETCH_FORECAST_SUCSSES, wether, city })
    },
    fetchedFailed: (message) => {
      dispatch({ type: actions.FETCH_DATA_FAILED, message })
    },
  }

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  )
}

export default Provider
