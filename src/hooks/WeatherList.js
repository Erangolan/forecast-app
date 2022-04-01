/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import Grid from '@mui/material/Grid'
import { TodoListContext } from '../providers/Provider'
import Msg from '../components/Msg'
import Loader from '../components/Loader'
import Ticket from '../components/Ticket'

const WeatherList = () => {
  const { wether, status, city, message } = useContext(TodoListContext)

  let render
  if (status === 'loading') {
    render = <Loader />
  } else if (status === 'succeeded') {
    render = (
      <>
        <h1>{city}</h1>
        <Grid sx={{ flexGrow: 1, margin: 'auto' }} container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={2}>
              { wether.map((item, i) => <Ticket data={item} key={i} />) }
            </Grid>
          </Grid>
        </Grid>
      </>
    )
  } else if (status === 'error') {
    render = <Grid sx={{ margin: 'auto', alignContent: 'center', alignItems: 'center' }} container spacing={2}><Msg message={message} /></Grid>
  } else if (status === 'idle') {
    render = <Grid sx={{ margin: 'auto', alignContent: 'center', alignItems: 'center' }}><Msg message="Welcome!" /></Grid>
  }

  return render
}

export default WeatherList
