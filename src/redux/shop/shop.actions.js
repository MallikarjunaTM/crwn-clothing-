import ShopActionType from './shop.type';
import { firestore,convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart=()=>({
    type:ShopActionType.FETCH_COLLECTIONS_START,
    
})

export const fetchCollectionsSuccess = collectionsMap =>({
    type:ShopActionType.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionsMap
})

export const fetchCollectionFailure = errorMessage =>({
    type:ShopActionType.FETCH_COLLECTIONS_FAILURE,
    payload:errorMessage
})

export const fetchCollectionsStartAsync = () =>{
    return dispatch=>{
        /*calling firestore for collectionItems*/
        const collectionRef= firestore.collection('collectionsItems');
        dispatch(fetchCollectionsStart);
        /*collectionRef.get() will give data*/
        collectionRef.get().then(snapshot=>{
             /*after getting data from collectionRef.get() converting data into collectionMap*/    
            const collectionsMap=convertCollectionSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap))
            
        }).catch(error=>dispatch(fetchCollectionFailure(error.message)))
    }
}