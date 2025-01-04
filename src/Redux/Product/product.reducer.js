import { INCR, DECR } from "./product.action";
let initialState = {
    product_Name: "Marker Pen",
    price: 30,
    qty: 1,
    image: ""
}

let productReducer = (state=initialState,action)=> {
    switch(action.type) {
        case 'INCR':
            return {...state,qty:state.qty+1}
        case 'DECR':
            return {...state,qty:state.qty-1}
        default:
            return state        
    }
}
export {productReducer}