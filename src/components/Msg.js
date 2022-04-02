/* eslint-disable no-unused-vars */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2rem 3rem',
    textAlign: 'center',
    fontSize: 'xxx-large'
  },
}))

export default function Msg ({ message }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h2> {message} </h2>
    </div>
  )
}
