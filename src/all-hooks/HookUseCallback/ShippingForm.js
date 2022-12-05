import React, { useState } from 'react'

const ShippingForm = ({onSubmit}) => {
    const [ count, setCount] = useState(0);

    let startTime = performance.now();

    while (performance.now() - startTime < 500) {
        // Do nothing for 500 ms to emulate extremely slow code
      }

    const handleSubmit = (e) => {
        const formData = new FormData(e.target);
        const orderDetails = {
            ...Object.fromEntries(formData),
            count
        }

        onSubmit(orderDetails);
    }

  return (
   <form onSubmit={handleSubmit}>
    <label>
        No of items:
        <button onClick={() => setCount((prev) => prev.count + 1)}>+</button>{count}
        <button onClick={() => setCount((prev)=> prev.count -1)}>-</button>
    </label>
    <label>
        Street:
        <input name="street"/>
    </label>
    <label>
        City:
        <input name="city"/>
    </label>
    <label>
        Postal Code:
        <input name="zipCode"/>
    </label>
    <button type='submit'>Submit</button>
   </form>
  )
}

export default ShippingForm