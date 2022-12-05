import React, { useRef, useState } from 'react'

const HookUseRefWatch = () => {

    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    const handleStart = () => {
        setStartTime(Date.now());
        setNow(Date.now());
        clearInterval(intervalRef.current)
     intervalRef.current = setInterval(() => {
          setNow(Date.now()); 
       }, 10)

    }

    const handleStop = () => {
        clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;
    if(startTime!==null && now!==null){
        secondsPassed = (now - startTime)/1000;

    }
    
  return (
    <div>
        <p>Time passed:{secondsPassed}</p>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default HookUseRefWatch