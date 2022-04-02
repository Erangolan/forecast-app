/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { experimentalStyled as styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import CardHeader from '@mui/material/CardHeader'
import { blue } from '@mui/material/colors'
import Avatar from '@mui/material/Avatar'
import img from '../images/10d.png'
import RadioButtons from './RadioButtons'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginTop: '2%',
  },
  buttons: {
    backgroundColor: '#00000014',
    height: 50,
    padding: 20,
    marginTop: -50,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}))

const Ticket = ({ data }) => {
  const classes = useStyles()
  const [units, setUnits] = useState('celsius')

  const handleChange = (units) => {
    setUnits(units)
  }

  useEffect(() => {
    // console.log(units)
  }, [units])

  return (
    <><Grid key={data.Key} item>
      <Card sx={{ height: 270, width: 200, justifyContent: 'center' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.id}
          </Typography>
          <CardHeader
            avatar={<div style={{ width: '100%', margin: 'auto', }}>
              <Avatar alt='' sx={{ bgcolor: blue[500] }} aria-label="weather-day" src={img} style={{ float: 'left' }} />
              <Avatar alt='' sx={{ bgcolor: blue[500] }} aria-label="weather-night" src={img} style={{ float: 'left' }} />
            </div>} />
          {units === 'celsius' ? <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {data.minC.Value}C - {data.maxC.Value}C
          </Typography> : <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {data.minF.Value}{data.minF.Unit} - {data.maxF.Value}{data.minF.Unit}
          </Typography>}
          <Typography variant="body2">
            {data.ShortPhraseDay}
            <br />
            Hours os sun: {data.HoursOfSun}
          </Typography>
        </CardContent>
      </Card>
      <CardActions className={classes.buttons}>
        <RadioButtons onChange={handleChange} />
      </CardActions>
    </Grid></>
  )
}

export default Ticket

/**return (
    <Grid key={value.id} item>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {value.id}
          </Typography>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: blue[500] }} aria-label="weather">
                    R
              </Avatar>
            }
          />
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {value.minF.Value}{value.minF.Unit} - {value.maxF.Value}{value.minF.Unit}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {value.minC.Value}C - {value.maxC.Value}C
          </Typography>
          <Typography variant="body2">
            {value.ShortPhraseDay}
            <br />
                  Hours os sun: {value.HoursOfSun}
          </Typography>
        </CardContent>
      </Card>
    </Grid>

  ) */