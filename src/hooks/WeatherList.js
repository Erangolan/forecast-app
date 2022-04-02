/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@mui/material/Grid'
import Loader from '../components/Loader'
import Msg from '../components/Msg'

import { WetherContext } from '../providers/Provider'
import Ticket from '../components/Ticket'

const useStyles = makeStyles(() => ({
  title: {
    textAlign: 'center',
    diplay: 'block',
    fontSize: 'xxx-large'
  },
  message: {
    alignContent: 'center',
    alignItems: 'center'
  }
}))

const WeatherList = () => {
  const classes = useStyles()
  const { wether, status, city, message } = useContext(WetherContext)

  let render
  if (status === 'loading') {
    render = <Loader />
  } else if (status === 'succeeded') {
    render = (
      <>
        <h1 className={classes.title}>{city}</h1>
        <Grid sx={{ flexGrow: 1, padding: 2 }} container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={2}>
              { wether.map((item, i) => <Ticket data={item} key={i} />) }
            </Grid>
          </Grid>
        </Grid>
      </>
    )
  } else if (status === 'error') {
    render = <Grid className={classes.message} container spacing={2}>
      <Msg message={message} />
    </Grid>
  } else if (status === 'idle') {
    render = <Grid className={classes.message}>
      <Msg message="Welcome!" />
    </Grid>
  }

  return render
}

export default WeatherList
