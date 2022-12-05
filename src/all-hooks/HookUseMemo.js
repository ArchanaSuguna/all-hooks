//Use memo is the react hook that lets you cache the result of a calculation between renders.



import React, { useMemo, useState } from 'react'

const HookUseMemo  = () => {

const [count, setCount] = useState({
  num : 1,
  id : "abc"
})
const [show, setShow] = useState(false);

const handleChange = useMemo(() =>{

    for(let i=0; i<1000000000; i++){

    }
    return count.num*2; 
}, [count])
 
// const handleChange = () =>{

//     for(let i=0; i<1000000000; i++){

//     }
//     return count.num*2;
// }

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
        {show && <div>{count.id}</div>}
        <button onClick={handleSubtract}>-</button>
        <p>{handleChange}</p>
        <button onClick={() => setShow(!show)}>Change</button>

    </div>
  )
}

export default HookUseMemo;