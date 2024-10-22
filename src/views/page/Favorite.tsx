import { Navbar, Page, Block, NavTitle, NavTitleLarge } from 'framework7-react';

const Favorite = () => {

  return (
    <>
      <Block className='mains'>
        <Navbar className='custom-color' large transparent sliding={false}>
          <NavTitle sliding>Favorites</NavTitle>
          <NavTitleLarge >Favorites</NavTitleLarge>
        </Navbar>
      </Block>
      <Block className='mains'>
        <p>You don't have any favorites yet</p>
        <p>When viewing an item, press the favorite icon favorite_border to add it</p>
      </Block>
    </>
  );
};

export default Favorite;