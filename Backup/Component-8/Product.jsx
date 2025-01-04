import React, { useState } from 'react'

const Product = ()=> {
    let [product, setProduct] = useState ({ product_Name: "cycle", qty: 1, price: 45000})
    let incrHandler = ()=> {
        setProduct({...product,qty : product.qty+1})
    }
    return (
        <div>
            <h4> Product Name: {product.product_Name} </h4>
            <h4> Product Name: {product.price} </h4>
            <button onClick={()=> {setProduct({...product,qty : product.qty-1})}}>Decr</button>{product.qty}<button onClick={incrHandler}>Incr</button>
        </div>
    )
}
export default Product;