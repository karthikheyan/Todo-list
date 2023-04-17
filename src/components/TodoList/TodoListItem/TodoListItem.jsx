import React, { useState } from 'react'
import "./TodoListItem.css"

const TodoListItem = (props) => {
    const {item, onDelete, onEdit, editCompleted, editNotCompleted} = props
    const {title,priority,_id,isCompleted} = item
  return (
    <div className={`item-card ${priority}`}>
    {isCompleted? (<span onClick={()=> editNotCompleted(item)} className="material-symbols-outlined pointer">select_check_box</span>)
                :(<span onClick={()=> editCompleted(item)} className="material-symbols-outlined pointer">check_box_outline_blank</span>)}
        <div className={`card-title ${isCompleted && 'strike'}`}>{title}</div>
        <div className={"badge"}>{priority}</div>
        <span onClick={()=> onEdit(item)} className="material-symbols-outlined edit pointer">edit</span>
        <span onClick={()=> onDelete(_id)} className="material-symbols-outlined pointer">delete</span>
    </div>
  )
}

export default TodoListItem
