import CartActionTypes from './cart.type'; 
import { addToCart } from './cart.utils';

const INTIAL_STATE={
    hidden: true,
    cardItems:[]
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
                cardItems:addToCart(state.cardItems,action.payload)
            };    
        default:return state    

    }
};

export default cartReducer;