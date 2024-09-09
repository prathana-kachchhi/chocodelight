import React from 'react'
import categoryApi from '../../../categoryApi/categoryApi'

export default function Gifting() {
    const gifting = categoryApi[1].product
  return (
    <div className='gift'>
        <div className="container">
            <div className="gift-product">
                {
                    gifting.map(product => (
                        <div className="gift-product-item" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </div>
                    ))
                }
            </div>
          </div>
    </div>
  )
}
