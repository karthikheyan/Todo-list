import React from 'react'
import './FilterItem.css'
const FilterItem = (props) => {
    const {setUseFilter, useFilter} = props
  return (
    <div className="filter-container">
            <div className='filter-options'>
              <div onClick={()=>setUseFilter('low')} className={`filter-option ${useFilter==='low' && 'low'}`}>Low</div>
              <div onClick={()=>setUseFilter('medium')} className={`filter-option ${useFilter==='medium' && 'medium'}`}>Medium</div>
              <div onClick={()=>setUseFilter('high')} className={`filter-option ${useFilter==='high' && 'high'}`}>High</div>
            </div>
        <div onClick = {()=> setUseFilter('all')} className='filter-clear-btn'>Clear filters</div>
    </div>
  )
}

export default FilterItem
