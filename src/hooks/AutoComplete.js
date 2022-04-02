/* eslint-disable no-unused-vars */
import React, { useMemo, useContext, useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { debounce } from 'lodash'
import { WetherContext } from '../providers/Provider'
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
  } = useContext(WetherContext)

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
    }
    setCities([...new Set(cities)])
  }

  const debouncedChangeHandler = useMemo(() => debounce(changeHandler, 500), [])

  const fetch5DaysForecast = async (city) => {
    if (city === providerCity) {
      return
    }
    startFetching()
    const { wether, status, error } = await fetchForecast(city)
    if (status !== 200) {
      fetchedFailed(error.toString())
    } else {
      fetchForecastSuccess(wether, city)
    }
  }

  return (
    <Autocomplete
      onChange={(_, newValue) => newValue ? fetch5DaysForecast(newValue.LocalizedName) : null}
      clearOnBlur={false}
      id="combo-box-demo"
      disabled={disable}
      options={cities || ''}
      filterOptions={(options) => [...new Set(options)]}
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
      onInputChange={debouncedChangeHandler}
    />
  )
}

export default AutoComplete
