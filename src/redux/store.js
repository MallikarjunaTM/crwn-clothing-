import { createStore, applyMiddleware } from 'redux';

import { logger } from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk'; 

    
    const middlewares = [logger,thunk];
if(process.env.NODE_ENV==='devolpment'){
    console.log('inside development')
}
export const store = createStore(rootReducer , applyMiddleware(...middlewares));
export const persistor = persistStore(store);


export default {store,persistor} ;