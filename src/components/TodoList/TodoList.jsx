import React, { useEffect, useState } from 'react'
import TodoListItem from './TodoListItem/TodoListItem'


const TodoList = (props) => {
    const {deleteItem, list,onEdit,setUseFilter} = props
    const filterValue = document.getElementsByClassName('filterDropDown').value
    console.log(filterValue)
    return (
      <div>
        <div className="filter-container">
          <div onClick = {()=> setUseFilter('all')} className='filtler-clear-btn'>Clear filters</div>
          <select name="filter-dropdown" className="filterDropDown">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

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
