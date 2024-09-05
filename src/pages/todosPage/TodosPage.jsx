import React from 'react'
import Todo from '../../components/todo/Todo'
import classes from './todosPage.module.css'

const arr = ["todo 1", "todo 2", "todo 3"]

export default function TodosPage() {
  return (
    <div className={classes.todo}>
        {
            arr.map(el =><Todo todo={el}/>)
        }
    </div>
  )
}
