/* eslint-disable no-unused-vars */
import React, { useMemo, useContext, useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { debounce } from 'lodash'
import { TodoListContext } from '../providers/Provider'
import { fetchAutoComplete } from '../api/fetch-autocomplete'
import { fetchForecast } from '../api/fetch-forecast'

const AutoComplete = () => {
  const [disable, setDisable] = useState(false)
  const {
    cities,
    startAutoCompleteFetching,
    startForecastFetching,
    fetchForecastSuccess,
    autoCompleteSuccess,
    autoCompleteFailes,
    fetchForecastFailed,
  } = useContext(TodoListContext)

  const changeHandler = async (event) => {
    if (!event.target.value) {
      return
    }
    startAutoCompleteFetching()
    const { cities, status, error } = await fetchAutoComplete(event.target.value)
    if (status !== 200) {
      console.log(error.toString())
      autoCompleteFailes(error.toString())
      setDisable(true)
      return
    } else {
      autoCompleteSuccess(cities)
    }
  }

  const debouncedChangeHandler = useMemo(() => debounce(changeHandler, 500), [])

  const fetch5DaysForecast = async (city) => {
    startForecastFetching()
    const { wether, status, error } = await fetchForecast(city)
    if (status !== 200) {
      fetchForecastFailed(error)
    }
    fetchForecastSuccess(wether, city)
  }

  // useEffect(() => {

  // }, [cities])

  return (
    <><Autocomplete // to remove condition to fetch5DaysForecast
      onChange={(_, newValue) => {
        if (newValue) {
          fetch5DaysForecast(newValue.LocalizedName)
        }
      }}
      clearOnBlur={true}
      // disablePortal
      id="combo-box-demo"
      disabled={disable}
      options={cities || ''}
      isOptionEqualToValue={(option, value) => option.Key === value.Key}
      getOptionLabel={option => (option ? option.LocalizedName : '')}
      renderOption={(props, option) => {
        return (
          <li {...props} key={option.Key}>
            {option.LocalizedName}
          </li>
        )
      }}
      sx={{ width: 300, marginRight: 'auto', marginLeft: 'auto', marginTop: 2 }}
      renderInput={(params) => <TextField {...params} label="City" />}
      onInputChange={debouncedChangeHandler} /></>
  )
}

export default AutoComplete
