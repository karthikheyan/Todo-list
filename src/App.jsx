import './App.css'
import NewItem from './components/NewItem/NewItem'
import TodoList from './components/TodoList/TodoList'
import { useState } from 'react'

const DEFAULT_LIST = [
  {
      title: "Study Javascript",
      priority: "high"
  },
  {
      title: "Study CSS",
      priority: 'low'
  },
  {
      title: "Study HTML",
      priority: 'medium'
  }
]

const App = ()=>{
  const [list, setList] = useState(DEFAULT_LIST);
  const deleteItem = index => {
      const filteredList = list.filter((_,i) => i !== index)
      setList([...filteredList]);
  }

  const addItem = (item)=>{
    setList((prev) => [item,...prev])
  }

  return(
    <div className='app'>
    <h1 className='title'>Todo List</h1>
    <NewItem addItem={addItem}/>
    <TodoList list = {list} deleteItem={deleteItem}/>
    </div>
  )
}

export default App
