import { useState } from "react"
import { IoTrash } from "react-icons/io5";

import React from 'react'

const List = () => {
const [items,setItems]=useState([
    {  id:1,
      checked:true,
      item:"whishlist"},
      {  id:2,
        checked:true,
        item:"order"},
        {  id:3,
            checked:true,
            item:"coupen"},
            {  id:4,
                checked:true,
                item:"offers"},])
const handleCheck=(id)=>{
const listItems=items.map((item)=>
item.id===id ? {...item,checked:!item.checked}:item)
setItems(listItems)}

const handleDelete=(id)=>{
  const listItems=items.filter((item)=>
  item.id!==id)
  setItems(listItems)
}

  return (
    <div>
<ul>
{items.map((item) => (
<li className="item" key={item.id}> 
  <input 
  type='checkbox'
  onChange={()=>handleCheck(item.id)}
  checked={item.checked}
  />
  <label>{item.item}</label>
  <IoTrash
  role="button" 
  onClick={()=>handleDelete(item.id)}
  tabIndex="0"/>
  
</li>

))}
</ul>
    </div>
  )
}

export default List