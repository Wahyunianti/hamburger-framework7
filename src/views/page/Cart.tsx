import { Navbar, Page, Block, NavTitle, NavTitleLarge } from 'framework7-react';

const Cart = () => {

  return (
    <>
      <Block className='mains'>
        <Navbar className='custom-color' large transparent sliding={false}>
          <NavTitle sliding>Cart</NavTitle>
          <NavTitleLarge >Cart</NavTitleLarge>
        </Navbar>
      </Block>
      <Block className='mains'>
        <p>Your cart is empty.</p>
      </Block>
    </>
  );
};

export default Cart;