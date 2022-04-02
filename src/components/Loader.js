/* eslint-disable no-unused-vars */
import * as React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400
  },
  loader: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
}))

export default function Loader() {
  const classes = useStyles()
  return (
    <Box className={classes.box}>
      <CircularProgress className={classes.loader} thickness={5} size={100}/>
    </Box>
  )
}
