import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price})=>{
    const priceForStripe=price*10;
    const publishableKey='pk_test_51J0lSvSFgZ1lFxyNcWN4gAtMrtbJcIgbyfEHqtA8VZ3dN36Lj9TqYut6y4KPAbURcSqCw5YYpobk11lJ1yZTAfyu00ZhhTv3jS';

    const onToken = token =>{
        console.log(token);
        alert('payment successfull')
    }
    return <StripeCheckout
            label='pay now'
            name='CRWN clothing ltd'
            billingAddress
            shippingAddress
            image=''
            description={`your total price ${price}`}
            amount={priceForStripe}
            panelLabel='pay now'
            token={onToken}
            stripeKey={publishableKey}
    />
}

export default StripeCheckoutButton;