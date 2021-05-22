import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from'../assets/crown.svg';
import './header.style.scss';
import { auth } from '../firebase/firebase.utils';
import { connect } from 'react-redux';
import CardIcon from '../components/card-icon/card-icon.component';
import CartDropdown from '../components/cart-dropdown/cart-dropdown.component';

const Header=({currentUser,hidden})=>(
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser?
                <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>:
                <Link className='option' to="/signin">SIGN IN</Link>
            }
            <CardIcon/>
        </div>
        {
            hidden?null:<CartDropdown/>
        }
        
    </div>
);

const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) =>({
    
    currentUser:currentUser,
    hidden:hidden
})
export default connect(mapStateToProps)(Header);
