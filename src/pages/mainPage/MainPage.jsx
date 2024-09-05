import React from 'react'
import Description from '../../components/description/Description'
import classes from './mainPage.module.css'

export default function MainPage() {
  return (
    <div className={classes.info2}><Description info={{title: "Title 2", description: "description 2"}} /></div>
  )
}
