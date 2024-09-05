import React from 'react'
import Description from '../../components/description/Description'
import classes from './aboutPage.module.css'

export default function AboutPage() {
  return (
    <div className={classes.info}><Description info={{title: "Title", description: "description"}} /></div>
  )
}
