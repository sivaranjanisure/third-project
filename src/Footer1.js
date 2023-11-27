import React from 'react'

const Footer1 = ({length}) => {
  return (
    <div>{length} list {length ===1?"item" :"items"}</div>
  )
}

export default Footer1