import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './card-icon.styles.scss';
import { connect } from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CardIcon = ({toggleCartHidden,itemCount}) => (
<div className='cart-icon' onClick={ toggleCartHidden }>
    <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'>{itemCount}</span>
</div>);

const mapDispatchToProp = dispatch =>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
});

const mapStateToProps = (state)=>({
    itemCount:selectCartItemsCount(state)
})

export default connect(mapStateToProps,mapDispatchToProp)(CardIcon);


