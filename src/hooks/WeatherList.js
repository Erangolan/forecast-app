/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { blue } from '@mui/material/colors'
import Avatar from '@mui/material/Avatar'
import img from '../images/10d.png'
import { TodoListContext } from '../providers/Provider'

const WeatherList = () => {
  const { wether, status, city, } = useContext(TodoListContext)

  let render
  if (status === 'loading') {
    render = <div>loading</div>
  } else if (status === 'succeeded') {
    render = (
      <>
        <h1>{city}</h1>
        <Grid sx={{ flexGrow: 1, margin: 'auto' }} container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={2}>
              { wether.map((data, i) => {
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
              }) }
            </Grid>
          </Grid>
        </Grid>
      </>
    )
  } else if (status === 'error') {
    render = <div>error</div>
  } else if (status === 'idle') {
    render = <div>Welcome!</div>
  }

  return render
}

export default WeatherList
