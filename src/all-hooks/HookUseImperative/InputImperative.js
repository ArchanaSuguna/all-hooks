import React, { forwardRef, useRef, useImperativeHandle } from 'react'

const InputImperative = forwardRef((props, ref) => {

    const inputRef = useRef(null);

    useImperativeHandle( ref, () => {
        return {
            focus(){
                inputRef.current.focus();
            },
            scrollIntoView(){
                inputRef.current.scrollIntoView();
            }
        }
      }, [])

  return (
    <div>
        <input type="" {...props} ref={inputRef} placeholder='Enter something' />
    </div>
  )
})

export default InputImperative