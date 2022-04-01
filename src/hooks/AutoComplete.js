/* eslint-disable no-unused-vars */
import React, { useMemo, useContext, useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { debounce } from 'lodash'
import { WeatherContext } from '../providers/Provider'
import { fetchAutoComplete } from '../api/fetch-autocomplete'
import { fetchForecast } from '../api/fetch-forecast'

const AutoComplete = () => {
  const [cities, setCities] = useState([])
  const [disable, setDisable] = useState(false)
  const {
    startFetching,
    fetchedFailed,
    fetchForecastSuccess,
    city: providerCity
  } = useContext(WeatherContext)

  const changeHandler = async (event) => {
    if (!event.target.value) {
      return
    }
    const { cities, status, error } = await fetchAutoComplete(event.target.value)
    if (status !== 200) {
      console.log(error.toString())
      fetchedFailed(error.toString())
      setDisable(true)
      return
    } else if (cities.length) {
      setCities(cities)
    }
  }

  const debouncedChangeHandler = useMemo(() => debounce(changeHandler, 500), [])

  const fetch5DaysForecast = async (city) => {
    if (city === providerCity) {
      return
    }
    startFetching()
    const { wether, status, error } = await fetchForecast(city)
    if (status !== 200) {
      fetchedFailed(error)
    }
    fetchForecastSuccess(wether, city)
  }

  return (
    <><Autocomplete
      onChange={(_, newValue) => {
        if (newValue) {
          fetch5DaysForecast(newValue.LocalizedName)
        }
      }}
      clearOnBlur={true}
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
