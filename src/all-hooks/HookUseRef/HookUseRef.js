import React, { forwardRef } from 'react'

export const InputRef = forwardRef((props, ref) => {

    return (
        <input  ref={ref} />
    )
})

export const HookUseRef = () => {
    const inputRef = React.useRef(null);

    const handleClick = () => {
        inputRef.current.focus()
    }

  return (
    <div>
        <InputRef ref={inputRef} />
        <button type='submit' onClick={handleClick}>Focus</button>
    </div>
  )
}
