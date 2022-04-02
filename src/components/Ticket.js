/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
  CardActions,
  Avatar
} from '@mui/material'
import { blue } from '@mui/material/colors'
import img2 from '../images/moon.png'
import img1 from '../images/sunny.svg'
import RadioButtons from './RadioButtons'

const useStyles = makeStyles(() => ({
  buttons: {
    backgroundColor: '#00000014',
    height: 50,
    padding: 20,
    marginTop: -50,
  },
}))

const Ticket = ({ data }) => {
  const classes = useStyles()
  const [units, setUnits] = useState('celsius')

  const handleChange = (units) => {
    setUnits(units)
  }

  return (
    <Grid key={data.Key} item>
      <Card sx={{ height: 270, width: 200, justifyContent: 'center' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.id}
          </Typography>
          <CardHeader
            avatar={
              <div style={{ width: '100%', }}>
                <Avatar alt='' sx={{ bgcolor: blue[500] }} aria-label="weather-day" src={img1} style={{ float: 'left', marginRight: 6 }} />
                <Avatar alt='' sx={{ bgcolor: blue[500] }} aria-label="weather-night" src={img2} style={{ right: 0 }} />
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
    </Grid>
  )
}

export default Ticket
