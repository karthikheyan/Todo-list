import React, { useEffect, useState } from 'react'
import TodoListItem from './TodoListItem/TodoListItem'
import "./TodoList.css"


const TodoList = (props) => {
    const {deleteItem, list,onEdit,editCompleted, editNotCompleted} = props
    return (
      <div>
        {list.length ? (list.map((item,index)=> 
        <TodoListItem
         key={index}
         item={item}
         index={index}
         onDelete={deleteItem}
         onEdit = {onEdit}
         editCompleted = {editCompleted}
         editNotCompleted = {editNotCompleted}
         />))
         : (<center>No Todo list to display!</center>)
        }
    </div>
  )
}

export default TodoList
