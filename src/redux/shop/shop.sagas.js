import { takeEvery,call, put,take,takeLatest,all } from 'redux-saga/effects';
import ShopActionType from './shop.type';
import { firestore,convertCollectionSnapshotToMap,se } from '../../firebase/firebase.utils';
import {fetchCollectionsSuccess,fetchCollectionFailure} from './shop.actions';

export function* fetchCollectionsAsync() {

    try{
    const collectionRef= firestore.collection('collectionsItems');
    const snapshot=yield collectionRef.get();
    const collectionsMap=yield call(convertCollectionSnapshotToMap,snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap))
    
    }
    catch(error){

        yield put(fetchCollectionFailure(error.message))
    }
        
}

export function* fetchCollectionsStart() {
   yield takeLatest(ShopActionType.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)])
}