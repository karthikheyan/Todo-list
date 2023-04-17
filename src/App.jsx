import './App.css'
import NewItem from './components/NewItem/NewItem'
import TodoList from './components/TodoList/TodoList'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const App = ()=>{
  const [list, setList] = useState({});
  const [editState, setEditState] = useState({});
  const [useFilter, setUseFilter] = useState('all');

  useEffect(()=>{
    useFilter!=="all" ? fetch(`http://localhost:3000/api/v2/todos/priority/${useFilter}`).then((res)=>res.json()).
    then((json)=> {
      let data = json.data.reverse()
      setList(data)

    })
    .catch(()=> console.log("network error"))
    :
    fetch(`http://localhost:3000/api/v2/todo`).then((res)=>res.json())
    .then((json)=> {
      let data = json.data.reverse()
      setList(data)
    })
    .catch(()=> console.log("network error"))


  },[editState,useFilter])

  const deleteItem = (id) => {
      // const filteredList = list.filter((item) => item.id !== id)
        fetch(`http://localhost:3000/api/v2/todo/${id}`,{
          method: 'DELETE',
        }).then(()=> {
          toast.warning("Deleted successfully");
          setEditState({});
        })
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

    fetch(`http://localhost:3000/api/v2/todo/${updatedItem._id}`,{
      method: 'PUT',
      headers: {
        'Accept': 'application/json,text/plain,*/*',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(updatedItem)
    }).then(()=> {
      toast.success("Updated successfully");
      setEditState({});
    })
    .catch((err)=> console.log("network error" + err))
  }
  const editCompleted = (updatedItem)=>{
    updatedItem.isCompleted=true;
    fetch(`http://localhost:3000/api/v2/todo/${updatedItem._id}`,{
      method: 'PUT',
      headers: {
        'Accept': 'application/json,text/plain,*/*',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(updatedItem)
    }).then(()=> {
      setEditState({});
    })
    .catch((err)=> console.log("network error" + err))
  }
  const editNotCompleted = (updatedItem)=>{
    updatedItem.isCompleted=false;
    fetch(`http://localhost:3000/api/v2/todo/${updatedItem._id}`,{
      method: 'PUT',
      headers: {
        'Accept': 'application/json,text/plain,*/*',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(updatedItem)
    }).then(()=> {
      setEditState({});
    })
    .catch((err)=> console.log("network error" + err))
  }
  const triggerEdit = (item)=> {
    setEditState(item)
  }

  return(
    <div className='app'>
    <h1 className='title'>Todo List</h1>
    <NewItem addItem={addItem} editState={editState} editItem={editItem} />
    <TodoList
      list = {list}
      deleteItem={deleteItem} 
      onEdit={triggerEdit} 
      setUseFilter={setUseFilter} 
      useFilter={useFilter}
      editCompleted={editCompleted}
      editNotCompleted={editNotCompleted}
      />
    <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
