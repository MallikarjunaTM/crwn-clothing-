import {all,call} from 'redux-saga/effects';

import { shopSagas } from './shop/shop.sagas';
import { userSagas,onGoogleSignInStart } from '../redux/user/user.saga'
import {cartSagas} from '../redux/cart/cart.sagas';

export default function* rootSaga(){
    yield all([call(shopSagas),call(userSagas),call(cartSagas)])
}