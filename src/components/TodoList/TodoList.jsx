import React from 'react'
import TodoListItem from './TodoListItem/TodoListItem'


const TodoList = (props) => {
    const {deleteItem, list,onEdit} = props
  return (
    <div>
        {list.length ? (list.map((item,index)=> 
        <TodoListItem
         key={index}
         item={item}
         index={index}
         onDelete={deleteItem}
         onEdit = {onEdit}
         />))
         : (<center>No Todo list to display!</center>)
        }
    </div>
  )
}

export default TodoList
