import React, { useEffect } from 'react'
import { useState } from 'react';
import "./NewItem.css"

const PRIORITY = ['low','medium','high'];

const NewItem = (props) => {
    const { addItem, editState, editItem } = props
    const [title,setTitle] = useState('')
    const [priority, setPriority] = useState('low')
    const isEdit = Boolean(editState._id)
    useEffect(() => {
        if(editState._id){
            setTitle(editState.title)
            setPriority(editState.priority)
        }      
    }, [editState])
    
    const handleInputChange = (e)=>{
        setTitle(e.target.value)
    }

    const handleEnter = (e)=> {
        if(e.key==="Enter"){
            handleSave()
        }
    }

    const handleSave = ()=> {
        if(!title, !priority){
            return
        }
        const obj = {
            title,
            priority,
            isCompleted: false
        }
        if(isEdit) {
            obj._id = editState._id;
            editItem(obj);
        }
        else {
            addItem(obj)
        }
        setPriority('low')
        setTitle('')
    }


  return (
    <div className='new-item-card'>
        <div className='form-container'>
            <input placeholder="Type here" value={title} className = "input" type="text" onChange={handleInputChange} onKeyDown={handleEnter}/>
            {title && (<div>
                <div className="badge-container">
                {PRIORITY.map((p) => 
                <div key={p} 
                onClick={()=> setPriority(p)}
                className={`p-badge ${p} ${p === priority && 'selected'}`}
                value={p}>  
                {p}
                </div>)}
                </div>

                <div className='btn-container'>
                    <button className='primary' onClick={handleSave}>Save</button>
                    <button onClick={()=> {
                        setTitle('')
                        setPriority('low')
                    }}>Clear</button>
                </div>

            </div>)}
        </div>
    </div>
    )
}

export default NewItem
