import {
    BlockTitle,
    Breadcrumbs,
    BreadcrumbsItem,
    Block,
    Link,
    List,
    ListItem,
    Searchbar,
    Navbar,
    NavTitle,
    NavTitleLarge,
    Page

} from 'framework7-react';
import {
    Slide1,
    Slide2,
    Slide3,
    Bicmac,
    Mix,
    Pepsi,
    Chocolate,
    Pie,
    Tasty,
    Bacon,
    Diablo
} from '../assets';
function Dashboard() {
    return (
        <Block className='mains'>
            <Navbar className='custom-color' large transparent sliding={false}>
                <NavTitle sliding>Seven Burger</NavTitle>
                <NavTitleLarge >Seven Burger</NavTitleLarge>
            </Navbar>
            <Searchbar searchContainer=".search-list" searchIn=".item-title" />
            <List strongIos outlineIos dividersIos className="searchbar-not-found">
                <ListItem title="Nothing found" />
            </List>
            <List strongIos outlineIos dividersIos className="search-list searchbar-found">
                <Block className='containerr'>
                    <Block className='containnn'>
                        <Link>
                            <img className='demodia' src={Slide1} alt="" />

                        </Link>
                        <Link>
                            <img className='demodia' src={Slide2} alt="" />

                        </Link>
                        <Link>
                            <img className='demodia' src={Slide3} alt="" />

                        </Link>
                    </Block>
                </Block>
                <BlockTitle>Categories</BlockTitle>
                <Block strongIos outlineIos>
                    <Breadcrumbs>
                        <BreadcrumbsItem>
                            <img className='iconss' src={Bicmac} alt="" />
                            <Link text="Home" />
                        </BreadcrumbsItem>
                        <BreadcrumbsItem>
                            <img className='iconss' src={Mix} alt="" />
                            <Link text="Home" />
                        </BreadcrumbsItem>
                        <BreadcrumbsItem>
                            <img className='iconss' src={Chocolate} alt="" />
                            <Link text="Home" />
                        </BreadcrumbsItem>
                        <BreadcrumbsItem>
                            <img className='iconss' src={Pepsi} alt="" />
                            <Link text="Home" />
                        </BreadcrumbsItem>
                    </Breadcrumbs>

                </Block>
                <BlockTitle>Popular Now</BlockTitle>
                <Block className='containerr '>
                    <Block className='containnn productt'>
                        <Link>
                            <Block className='cardsd'>
                                <img className='cardimg' src={Diablo} alt="" />
                                <h3>Diablo</h3>
                                <h4>Spicy chorizo with hot jalapeno peppers</h4>
                                <h3 className='prices'><span>$</span>6.50</h3>
                            </Block>
                        </Link>
                        <Link>
                            <Block className='cardsd'>
                                <img className='cardimg' src={Mix} alt="" />
                                <h3>Mix</h3>
                                <h4>Bacon, chicken, ham</h4>
                                <h3 className='prices'><span>$</span>6.59</h3>
                            </Block>
                        </Link>
                        <Link>
                            <Block className='cardsd'>
                                <img className='cardimg' src={Pie} alt="" />
                                <h3>Apple Pie</h3>
                                <h4>100% American-grown apples</h4>
                                <h3 className='prices'><span>$</span>1.99</h3>
                            </Block>
                        </Link>
                        <Link>
                            <Block className='cardsd'>
                                <img className='cardimg' src={Chocolate} alt="" />
                                <h3>Chocolate Donut</h3>
                                <h4>Chocolate and cream filling</h4>
                                <h3 className='prices'><span>$</span>0.99</h3>
                            </Block>
                        </Link>
                        <Link>
                            <Block className='cardsd'>
                                <img className='cardimg' src={Tasty} alt="" />
                                <h3>Big Tasty</h3>
                                <h4>100% fresh beef burger</h4>
                                <h3 className='prices'><span>$</span>3.99</h3>
                            </Block>
                        </Link>
                        <Link>
                            <Block className='cardsd'>
                                <img className='cardimg' src={Bacon} alt="" />
                                <h3>Big Mac Bacon</h3>
                                <h4>Classic with bacon</h4>
                                <h3 className='prices'><span>$</span>2.99</h3>
                            </Block>
                        </Link>
                    </Block>
                </Block>
                <BlockTitle>Top of the week</BlockTitle>
                <Block className='containerr '>
                    <Block className='containnn productt'>
                        <Link>
                            <Block className='cardsd'>
                                <img className='cardimg' src={Diablo} alt="" />
                                <h3>Diablo</h3>
                                <h4>Spicy chorizo with hot jalapeno peppers</h4>
                                <h3 className='prices'><span>$</span>6.50</h3>
                            </Block>
                        </Link>
                        <Link>
                            <Block className='cardsd'>
                                <img className='cardimg' src={Mix} alt="" />
                                <h3>Mix</h3>
                                <h4>Bacon, chicken, ham</h4>
                                <h3 className='prices'><span>$</span>6.59</h3>
                            </Block>
                        </Link>
                        <Link>
                            <Block className='cardsd'>
                                <img className='cardimg' src={Pie} alt="" />
                                <h3>Apple Pie</h3>
                                <h4>100% American-grown apples</h4>
                                <h3 className='prices'><span>$</span>1.99</h3>
                            </Block>
                        </Link>
                        <Link>
                            <Block className='cardsd'>
                                <img className='cardimg' src={Chocolate} alt="" />
                                <h3>Chocolate Donut</h3>
                                <h4>Chocolate and cream filling</h4>
                                <h3 className='prices'><span>$</span>0.99</h3>
                            </Block>
                        </Link>
                        <Link>
                            <Block className='cardsd'>
                                <img className='cardimg' src={Tasty} alt="" />
                                <h3>Big Tasty</h3>
                                <h4>100% fresh beef burger</h4>
                                <h3 className='prices'><span>$</span>3.99</h3>
                            </Block>
                        </Link>
                        <Link>
                            <Block className='cardsd'>
                                <img className='cardimg' src={Bacon} alt="" />
                                <h3>Big Mac Bacon</h3>
                                <h4>Classic with bacon</h4>
                                <h3 className='prices'><span>$</span>2.99</h3>
                            </Block>
                        </Link>
                    </Block>
                </Block>

                <BlockTitle>Recently viewed</BlockTitle>
                <Block className='containerr '>
                    <Block className='containnn productt'>
                        <Link>
                            <Block className='cardsd'>
                                <img className='cardimg' src={Diablo} alt="" />
                                <h3>Diablo</h3>
                                <h4>Spicy chorizo with hot jalapeno peppers</h4>
                                <h3 className='prices'><span>$</span>6.50</h3>
                            </Block>
                        </Link>
                        <Link>
                            <Block className='cardsd'>
                                <img className='cardimg' src={Mix} alt="" />
                                <h3>Mix</h3>
                                <h4>Bacon, chicken, ham</h4>
                                <h3 className='prices'><span>$</span>6.59</h3>
                            </Block>
                        </Link>
                        <Link>
                            <Block className='cardsd'>
                                <img className='cardimg' src={Pie} alt="" />
                                <h3>Apple Pie</h3>
                                <h4>100% American-grown apples</h4>
                                <h3 className='prices'><span>$</span>1.99</h3>
                            </Block>
                        </Link>
                        <Link>
                            <Block className='cardsd'>
                                <img className='cardimg' src={Chocolate} alt="" />
                                <h3>Chocolate Donut</h3>
                                <h4>Chocolate and cream filling</h4>
                                <h3 className='prices'><span>$</span>0.99</h3>
                            </Block>
                        </Link>
                    </Block>
                </Block>
            </List>
        </Block>
    )
}

export default Dashboard;