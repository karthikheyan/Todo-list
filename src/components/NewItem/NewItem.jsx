import React from 'react'
import { useState } from 'react';
import "./NewItem.css"

const PRIORITY = ['low','medium','high'];

const NewItem = (props) => {
    const [isChecked,setChecked] = useState(false);
    const [title,setTitle] = useState('')
    const [priority, setPriority] = useState('low')

    const {addItem} = props
    const handleInputChange = (e)=>{
        setTitle(e.target.value)
    }

    const handleSave = ()=> {
        if(!title, !priority){
            return
        }
        const obj = {
            title,
            priority,
        }
        addItem(obj)
        setPriority('low')
        setTitle('')
    }

  return (
    <div className='new-item-card'>
        <div className='checkbox'>
            {isChecked? (<span onClick={()=> setChecked(false)} className="material-symbols-outlined pointer">select_check_box</span>)
                        :(<span onClick={()=> setChecked(true)} className="material-symbols-outlined pointer">check_box_outline_blank</span>)}
        </div>
        <div className='form-container'>
            <input placeholder="Type here" value={title} className = "input" type="text" onChange={handleInputChange}/>
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
