import React, { useEffect, useState } from 'react'
import TodoListItem from './TodoListItem/TodoListItem'
import "./TodoList.css"
import FilterItem from '../FilterItem/FilterItem'

const TodoList = (props) => {
    const {deleteItem, list,onEdit,setUseFilter,useFilter,editCompleted, editNotCompleted} = props
    return (
      <div>
        <FilterItem setUseFilter={setUseFilter} useFilter={useFilter}/>
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
