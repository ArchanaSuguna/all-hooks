import React, { useRef } from 'react'
import InputImperative from './InputImperative'

const HookUseImperative = () => {

    const ref = useRef(null);

    const handleClick = () => {
        ref.current.focus();
    }

    return (
    <div>
       <InputImperative ref={ref} />
       <button onClick={handleClick}>Edit</button>
    </div>
      )
       
}

export default HookUseImperative