import React from 'react';
import './collection-item.component.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';

const CollectionItem =({item,addItem})=>{
    const {imageUrl,name,price }=item;
    return(
    <div className='collection-item'>
        <div className='image' 
        style={{
            backgroundImage:`url(${imageUrl})`
        }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton inverted onClick={()=>addItem(item)}>ADD CART</CustomButton>
    </div>

)};

const mapDispatchToProp = dispatch =>({
    addItem : item => dispatch(addItem(item))
});

export default connect(null,mapDispatchToProp)(CollectionItem);