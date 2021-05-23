import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { clearItemFromCart,removeItem,addItem } from '../../redux/cart/cart.action';

const CheckoutItem = ({cartItem,clearItem,removeItemCart,addItemCart}) =>{

    const { name,imageUrl,quantity,price } = cartItem;
    return(
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={()=>removeItemCart(cartItem)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={()=>addItemCart(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={()=>clearItem(cartItem)}>&#10005;</div>
    </div>)

    }



const mapDispatchToProp = dispatch => ( {
    clearItem:item=>dispatch(clearItemFromCart(item)),
    addItemCart:item=>dispatch(addItem(item)),
    removeItemCart:item=>dispatch(removeItem(item))
});

export default connect(null,mapDispatchToProp)(CheckoutItem);