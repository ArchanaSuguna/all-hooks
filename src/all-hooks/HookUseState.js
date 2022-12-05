import React, { useState } from 'react'

const HookUseState = () => {

const [count, setCount] = useState({
  num : 1,
  id : "abc"
})

const handleAdd = () => {
   setCount((prev) => {
       return {
        ...prev,
        num: prev.num + 1
       }
   })
}

const handleSubtract = () => {
    setCount((prev) => {
        return {
            ...prev,
            num: prev.num - 1
        }
    })
}
  return (
    <div>
        <button onClick={handleAdd}>+</button>
        <div>{count.num}</div>
        <div>{count.id}</div>
        <button onClick={handleSubtract}>-</button>

    </div>
  )
}

export default HookUseState