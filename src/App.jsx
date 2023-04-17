import './App.css'
import NewItem from './components/NewItem/NewItem'
import TodoList from './components/TodoList/TodoList'
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const DEFAULT_LIST = [
  {
      id: nanoid(),
      title: "Study Javascript",
      priority: "high"
  },
  {
      id: nanoid(),
      title: "Study CSS",
      priority: 'low'
  },
  {
      id: nanoid(),
      title: "Study HTML",
      priority: 'medium'
  }
]

const App = ()=>{
  const [list, setList] = useState(DEFAULT_LIST);
  const [editState, setEditState] = useState({});

  useEffect(()=>{
    fetch('http://localhost:3000/api/v2/todo').then((res)=>res.json()).
    then((json)=> {
      let data = json.data.reverse()
      setList(data)
    })
    .catch(()=> console.log("network error"))
  },[list])

  const deleteItem = (id) => {
      // const filteredList = list.filter((item) => item.id !== id)
        fetch(`http://localhost:3000/api/v2/todo/${id}`,{
          method: 'DELETE',
        }).then(()=> toast.warning("Deleted successfully"))
        .catch(()=> console.log("network error"))

  }

  const addItem = (item)=>{
    fetch("http://localhost:3000/api/v2/todo",{
      method: 'POST',
      headers: {
        'Accept': 'application/json,text/plain,*/*',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(item)
    }).then(()=> setList((prev)=> [item, ...prev]))
    .catch((err)=> console.log(err))
    toast.success("Added successfully")
  }

  const editItem = (updatedItem)=>{
    // const updateList = list.map((item)=> (item.id===updatedItem.id)? updatedItem : item)
    fetch(`http://localhost:3000/api/v2/todo/${updatedItem._id}`,{
      method: 'PUT',
      headers: {
        'Accept': 'application/json,text/plain,*/*',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(updatedItem)
    }).then(()=> toast.success("Updated successfully"))
    .catch((err)=> console.log("network error" + err))
    setEditState({})
  }

  const triggerEdit = (item)=> {
    setEditState(item)
  }

  return(
    <div className='app'>
    <h1 className='title'>Todo List</h1>
    <NewItem addItem={addItem} editState={editState} editItem={editItem} />
    <TodoList list = {list} deleteItem={deleteItem} onEdit={triggerEdit}/>
    <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
