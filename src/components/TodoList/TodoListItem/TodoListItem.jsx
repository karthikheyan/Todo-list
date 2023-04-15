import React, { useState } from 'react'
import "./TodoListItem.css"

const TodoListItem = (props) => {
    const {item: {title,priority}, onDelete, index} = props
    const [isChecked,setChecked] = useState(false);
  return (
    <div className={`item-card ${priority}`}>
    {isChecked? (<span onClick={()=> setChecked(false)} className="material-symbols-outlined pointer">select_check_box</span>)
                :(<span onClick={()=> setChecked(true)} className="material-symbols-outlined pointer">check_box_outline_blank</span>)}
        <div className={`card-title ${isChecked && 'strike'}`}>{title}</div>
        <div className={"badge"}>{priority}</div>
        <span className="material-symbols-outlined pointer">edit</span>
        <span onClick={()=> onDelete(index)} className="material-symbols-outlined pointer">delete</span>
    </div>
  )
}

export default TodoListItem
