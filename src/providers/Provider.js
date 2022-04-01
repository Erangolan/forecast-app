/* eslint-disable no-unused-vars */
import { createContext, useReducer } from 'react'
import actions from '../actions'
import reducer from '../reducers/reducer'
export const TodoListContext = createContext()

export const initialState = {
  wether: [],
  status: 'idle',
  city: '',
  message: '',
  cities: [],
  units: 'celsius',
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = {
    wether: state.wether,
    status: state.status,
    city: state.city,
    cities: state.cities,
    message: state.message,
    startAutoCompleteFetching: () => {
      dispatch({ type: actions.AUTOCOMPLETE_START })
    },
    autoCompleteSuccess: () => {
      dispatch({ type: actions.AUTOCOMPLETE_SUCSSES })
    },
    autoCompleteFailes: () => {
      dispatch({ type: actions.AUTOCOMPLETE_FAILED })
    },
    startForecastFetching: () => {
      dispatch({ type: actions.FETCH_DATA_START })
    },
    fetchForecastSuccess: () => {
      dispatch({ type: actions.FETCH_DATA_SUCSSES })
    },
    fetchForecastFailed: () => {
      dispatch({ type: actions.FETCH_DATA_FAILED })
    },
  }

  return (
    <TodoListContext.Provider value={value}>
      {children}
    </TodoListContext.Provider>
  )
}

export default Provider
