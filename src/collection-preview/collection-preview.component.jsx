import React from 'react';
import './collection-preview.component.styles.scss';
import CollectionItem from '../components/collection-item/collection-item.component';

const CollectionPreview = ({title,items}) =>(
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.filter((item,index)=>index<4).map(({id, ...otherPropValues})=>
                <CollectionItem key ={id}{...otherPropValues}/>)}
            </div>
    </div>
);


export default CollectionPreview;