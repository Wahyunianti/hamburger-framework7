import { Navbar, Page, Block, NavTitle, NavTitleLarge } from 'framework7-react';

const Cart = () => {

  return (
    <>
      <Block className='mains'>
        <NavTitleLarge >Cart</NavTitleLarge>
        <p>Your cart is empty.</p>
      </Block>
    </>
  );
};

export default Cart;