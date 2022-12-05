import React, { useReducer } from 'react'

const HookUseReducer = () => {

    const countReducer = (state, action) => {
       
        switch(action.type){
            case "ADD" : 
            return {...state, count: state.count + action.payload}
            case "SUBTRACT":
            return {...state, count: state.count - 1}
            default:
                return state;
        }
    }

    const initialState = {
        count: 0,
        id: "abc"
    }
    const [state, dispatch] = useReducer(countReducer, initialState);
  return (
    <div>
        <button onClick={()=> dispatch({type: "ADD", payload: 5})}>+</button>
         {state.count}
        <button onClick={()=> dispatch({type: "SUBTRACT"})}>-</button>
    </div>
  )
}

export default HookUseReducer