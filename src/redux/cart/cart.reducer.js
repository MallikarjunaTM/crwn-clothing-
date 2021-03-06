import CartActionTypes from './cart.type'; 
import { addToCart,removeCartItem } from './cart.utils';

const INTIAL_STATE={
    hidden: true,
    cartItems:[]
};

const cartReducer =(state=INTIAL_STATE,action) =>{

    switch(action.type){

        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden:!state.hidden
            };

        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems:addToCart(state.cartItems,action.payload)
            };  
            
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems:state.cartItems.filter(cartItem=>cartItem.id!==action.payload.id)
            }; 
           
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems:removeCartItem(state.cartItems,action.payload)
            }    
        default:return state    

    }
};

export default cartReducer;