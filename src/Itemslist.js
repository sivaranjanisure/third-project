import React from 'react'

import Lineitems from './Lineitems';

const Itemslist = ({items,handleCheck,handleDelete}) => {
  return (
    <div><ul>
    {items.map((item) => (
      <Lineitems 
      item={item}
      key={item.id}
      handleCheck={handleCheck}
     handleDelete={handleDelete}
      />
    
    
    ))}
    </ul></div>
  )
}

export default Itemslist