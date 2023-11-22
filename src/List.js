import { useState } from "react"

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

  return (
    <div>
<ul>
{items.map((item) => (
<li>
  <input 
  type='checkbox'
  checked={item.checked}
  />
  <label>{item.item}</label>
  <button>delete</button>
</li>

))}
</ul>
    </div>
  )
}

export default List