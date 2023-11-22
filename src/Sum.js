import React, { useState } from 'react'

const Sum = () => {

const [value, setValue] = useState(0)
const [total,setTotal] = useState(0)

const handleInput = (e) => {
    setValue(+e.target.value)
}

const handleAdd = () => {
    setTotal(total + value )
}
  return (
    <div>
        <input type="number" onChange={(e)=> handleInput(e)}
            ></input>
        <button onClick={() => handleAdd()}>add</button>
        <p1 className="value" >{total}</p1>
    </div>
  )
}

export default Sum