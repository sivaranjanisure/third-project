


import React from 'react'
import Itemslist from './Itemslist'

const List = ({items,handleCheck,handleDelete}) => {


 return (
    <div>
      {(items.length)?(<Itemslist
      items={items}
      handleCheck={handleCheck}
     handleDelete={handleDelete}
      />
):(<p
style={{marginTop:"2rem"}}>your list is empty</p>)}
    </div>
  )
}

export default List