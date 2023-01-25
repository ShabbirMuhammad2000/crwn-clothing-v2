import { CheckoutItemContainer, ImageContainer, Span, Quantity, Arrow, Value, RemoveButton } from './checkout-item.styles';

import { useContext } from 'react'

import { CartContext } from '../../contexts/cart-dropdown.context'

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
  
    const { clearItemFromCart, addItemToCart, removeItemToCart } =
      useContext(CartContext);
  
    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);
  
    return (
        <CheckoutItemContainer>
          <ImageContainer>
            <img src={imageUrl} alt={`${name}`} />
          </ImageContainer>
          <Span> {name} </Span>
          <Quantity>
            <Arrow onClick={removeItemHandler}>
              &#10094;
            </Arrow>
            <Value>{quantity}</Value>
            <Arrow onClick={addItemHandler}>
              &#10095;
            </Arrow>
          </Quantity>
          <Span> {price}</Span>
          <RemoveButton onClick={clearItemHandler}>
            &#10005;
          </RemoveButton>
        </CheckoutItemContainer>
      );
    };

export default CheckoutItem