
//one option is to make entire component client component
import React from 'react'
import AddToCart from '../AddToCart'
import styles from './ProductCard.module.css'

const ProductCard = () => {
  return (
    <>
        <div>ProductCard</div>
        <div className='p-5 my-5 bg-sky-500 text-white text-xl hover:bg-sky-700'>
            {/* //seperated into another component  */}
            <AddToCart/>
        </div>
    </>
  )
}

export default ProductCard