import React, { useState } from 'react';
import ProductPage from './ProductPage';

const HookUseCallback = () => {
    const [isDark, setIsDark] = useState(false);


  return (
    <div>
        <label>
       <input type="checkbox" onChange={(e) => setIsDark(e.target.checked)}/>
       </label>
        <ProductPage theme={isDark ? 'dark' : 'light'}/>
    </div>
  )
}

export default HookUseCallback