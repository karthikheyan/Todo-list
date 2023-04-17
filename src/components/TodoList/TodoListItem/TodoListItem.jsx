import React, { useState } from 'react'
import "./TodoListItem.css"

const TodoListItem = (props) => {
    const {item, onDelete, onEdit} = props
    const {title,priority,_id} = item
    const [isChecked,setChecked] = useState(false);
  return (
    <div className={`item-card ${priority}`}>
    {isChecked? (<span onClick={()=> setChecked(false)} className="material-symbols-outlined pointer">select_check_box</span>)
                :(<span onClick={()=> setChecked(true)} className="material-symbols-outlined pointer">check_box_outline_blank</span>)}
        <div className={`card-title ${isChecked && 'strike'}`}>{title}</div>
        <div className={"badge"}>{priority}</div>
        <span onClick={()=> onEdit(item)} className="material-symbols-outlined edit pointer">edit</span>
        <span onClick={()=> onDelete(_id)} className="material-symbols-outlined pointer">delete</span>
    </div>
  )
}

export default TodoListItem
