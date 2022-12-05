import React, { useCallback } from 'react';
import ShippingForm from './ShippingForm';

const ProductPage = ({theme, productId, referrer}) => {

    const handleSubmit = useCallback((orderDetails) => {
        post('/product/' + productId + '/buy', {
            referrer,
            orderDetails,
          });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productId , referrer])

  return (
    <div className={theme}>
        <ShippingForm onSubmit={handleSubmit} />
    </div>
  )
}

function post(url, data) {
    // Imagine this sends a request...
    console.log('POST /' + url);
    console.log(data);
  }

export default ProductPage