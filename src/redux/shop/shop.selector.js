import { createSelector } from 'reselect';

const shopSelector= state =>state.shop;

export const shopCollections = createSelector(
    [shopSelector],
    (shop)=>shop.collections
); 