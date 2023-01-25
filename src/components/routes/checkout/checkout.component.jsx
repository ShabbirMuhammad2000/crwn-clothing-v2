import { useContext, useState } from 'react';

import { CartContext } from '../../../contexts/cart-dropdown.context';
import CheckoutItem from '../../checkout-item/checkout-item.component';

import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total,
  } from './checkout.styles'

const CheckoutPage = () => {
    const { cartItems, cartTotal} = useContext(CartContext)

    return (    
     <div>
        <h1>Checkout</h1>
        <CheckoutContainer>
             <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>

                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>

                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                        
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>

                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((cartItem) => {
                return (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                )
             })}
             <Total>Total: ${cartTotal}</Total>
         </CheckoutContainer>
        </div>
    );
};

export default CheckoutPage;

