import ShopActionType from './shop.type';
import { firestore,convertCollectionSnapshotToMap } from '../firebase/firebase.utils';

export const fetchCollectionsStart=()=>({
    type:ShopActionType.FETCH_COLLECTIONS_START,
    
})

export const fetchCollectionsStartAsync = () =>{
    return dispatch=>{
        const collectionRef= firestore.collection('collectionsItems');
        dispatch(fetchCollectionsStart);
        collectionRef.get().then(snapshot=>{
            const collectionsMap=convertCollectionSnapshotToMap(snapshot);
            //updateCollections(collectionsMap);
            this.setState({isLoading:false});
        })
    }
}