import { createSelector } from 'reselect';



const shopSelector= state =>state.shop;

export const shopCollections = createSelector(
    [shopSelector],
    (shop)=>shop.collections
); 

export const selectCollection=collectionUrlParam=>createSelector(
    [shopCollections],
    collections=>collections?collections[collectionUrlParam]:null
    )

export const selectCollectionForPreview=createSelector(
    [shopCollections],
    collections=>collections?Object.keys(collections).map(key=>collections[key]):[]
)

export const selectIsCollectionFetching = createSelector(
    [shopSelector],
    shop=>shop.isFetching
)

export const selectIsCollectionLoaded=createSelector(
    [shopSelector],
    /*!! will return false if it is null*/
    shop=>!!shop.collections
)