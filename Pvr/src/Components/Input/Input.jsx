import React from 'react'
import './Input.css'
const Input = ({searchQuery,setSearchQuery,onSearchClick}) => {
  
  const handleInputChange =(event)=>{
    setSearchQuery(event.target.value);
  }
  return (
    <div className='search-bar'>
      <input onChange={handleInputChange} value={searchQuery} type="text" placeholder='Search Movie...' className='search-input' />
      <button className='search-button' onClick={onSearchClick}>Search</button>
    </div>
  )
}

export default Input
