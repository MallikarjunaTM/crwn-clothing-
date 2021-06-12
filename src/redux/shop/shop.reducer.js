import SHOP_DATA from '../../shop/shop.data';
import ShopActionType from './shop.type';

const INITIAL_STATE ={
    collections:null,
    isFectching:false,
    errorMessage:undefined
};

const shopReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case ShopActionType.FETCH_COLLECTIONS_START:
            return{
                ...state,
                isFectching:true
            }
        case ShopActionType.FETCH_COLLECTIONS_SUCCESS:
            return{
                ...state,
                isFectching:false,
                collections:action.payload
            }
        case ShopActionType.FETCH_COLLECTIONS_FAILURE:
            return{
                ...state,
                isFectching:false,
                errorMessage:action.payload
            }    
        default:return state;
    }
}

export default shopReducer;