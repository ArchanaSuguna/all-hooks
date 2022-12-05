import React, { useRef, useState } from 'react'

const HookUseRef1 = () => {

    const[isPlaying, setIsPlaying] = useState(false);
    const ref = useRef(null);

    const handlePlay = () => {
       setIsPlaying(!isPlaying);
       console.log(isPlaying);
       if(isPlaying){
        ref.current.play();
       }
       else{
        ref.current.pause();
       }

    }


  return (
    <div>
        <button onClick={handlePlay}>Play</button>
        <video ref={ref} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}>
            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4"/>
        </video>

    </div>
  )
}

export default HookUseRef1