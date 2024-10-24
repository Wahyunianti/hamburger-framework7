import { Navbar, Page, Block, NavTitle, NavTitleLarge } from 'framework7-react';

const Favorite = () => {

  return (
    <>
      <Block className='mains'>
        <NavTitleLarge >Favorites</NavTitleLarge>
        <p style={{fontWeight: 800}}>You don't have any favorites yet</p>
        <p>When viewing an item, press the favorite icon   
        <i className="icon material-icons md-only text-color-primary">favorite_border</i>  to add it</p>
      </Block>
    </>
  );
};

export default Favorite;