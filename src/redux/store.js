import { createStore, applyMiddleware } from 'redux';

import { logger } from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';
//import thunk from 'redux-thunk'; 
import CreateSagaMiddleware from 'redux-saga';
import {fetchCollectionsStart} from '../redux/shop/shop.sagas';
import rootSaga from './root-saga';
    
    const sagaMiddleware=CreateSagaMiddleware()
    const middlewares = [logger,sagaMiddleware];
    
if(process.env.NODE_ENV==='devolpment'){
    console.log('inside development')
}
export const store = createStore(rootReducer , applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);


export default {store,persistor} ;