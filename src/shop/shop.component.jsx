import React from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../collection-preview/collection-preview.component';
class Shop extends React.Component{
    constructor(){
        super();
        this.state={
            collections:SHOP_DATA
        };
    }

    render(){
        
                return<div className='shop-page'>{this.state.collections.map(
            ({id,...someOtherprops})=><CollectionPreview key={id} {...someOtherprops}/>)}</div>
    }
}

export default Shop;