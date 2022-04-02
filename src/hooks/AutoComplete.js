/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useContext, useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { debounce } from 'lodash'
import { WetherContext } from '../providers/Provider'
import { fetchAutoComplete } from '../api/fetch-autocomplete'
import { fetchForecast } from '../api/fetch-forecast'

const AutoComplete = () => {
  const [cities, setCities] = useState([])
  const [disable, setDisable] = useState(false)
  const { startFetching, fetchedFailed, fetchForecastSuccess, city: providerCity } = useContext(WetherContext)

  const changeHandler = async (event) => {
    if (!event.target.value) {
      return
    }
    const { cities, status, error } = await fetchAutoComplete(event.target.value)
    console.log('cities: ', cities)
    if (status !== 200) {
      console.log(error.toString())
      fetchedFailed(error.toString())
      setDisable(true)
      return
    }
    setCities(cities)
  }

  const debouncedChangeHandler = useMemo(() => debounce(changeHandler, 500), [])

  const fetch5DaysForecast = async (city) => {
    if (city === providerCity) {
      return
    }
    console.log('city: ', city)
    startFetching()
    const { wether, status, error } = await fetchForecast(city)
    console.log('wether: ', wether)
    console.log('status: ', status)
    console.log('error: ', error)
    if (status !== 200) {
      fetchedFailed(error)
    }
    fetchForecastSuccess(wether, city)
  }

  useEffect(() => {

  }, [cities])

  return (
    <><Autocomplete // to remove condition to fetch5DaysForecast
      onChange={(_, newValue) => {
        if (newValue) {
          fetch5DaysForecast(newValue.LocalizedName)
        }
      }}
      clearOnBlur={false}
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
      sx={{ padding: 2 }}
      renderInput={(params) => <TextField {...params} label="City" />}
      onInputChange={debouncedChangeHandler} /></>
  )
}

export default AutoComplete
