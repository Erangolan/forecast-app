/* eslint-disable no-unused-vars */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { blue } from '@mui/material/colors'
import Avatar from '@mui/material/Avatar'
import img from '../images/10d.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginTop: '2%',
  },
  imageList: {
    width: 750,
    height: 675,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}))

const Ticket = ({ data }) => {

  return (
    <Grid key={data.Key} item >
      <Card sx={{ height: 350, width: 200, justifyContent: 'center' }} >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.id}
          </Typography>
          <CardHeader
            avatar={
              <div style={{ width: '100%', margin: 'auto', }}>
                <Avatar alt='' sx={{ bgcolor: blue[500] }} aria-label="weather-day" src={img} style={{ float: 'left' }}/>
                <Avatar alt='' sx={{ bgcolor: blue[500] }} aria-label="weather-night" src={img} style={{ float: 'left' }}/>
              </div>
            }
          />
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {data.minC.Value}C - {data.maxC.Value}C
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {data.minF.Value}{data.minF.Unit} - {data.maxF.Value}{data.minF.Unit}
          </Typography>
          <Typography variant="body2">
            {data.ShortPhraseDay}
            <br />
              Hours os sun: {data.HoursOfSun}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Ticket
