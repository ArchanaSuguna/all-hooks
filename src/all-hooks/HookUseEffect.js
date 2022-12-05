import React, { useEffect, useState } from 'react';

const HookUseEffect = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
    
        window.addEventListener("resize", () => {
            setScreenWidth(window.innerWidth)
        })
       return () => {
          window.removeEventListener("resize", () => {});
      }
    }, [screenWidth])

  return (
    <div>
        {screenWidth}
    </div>
  )
}

export default HookUseEffect