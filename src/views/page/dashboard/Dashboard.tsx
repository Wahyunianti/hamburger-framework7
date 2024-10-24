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
    Tab,
    Tabs

} from 'framework7-react';
import {
    Slide1,
    Slide2,
    Slide3,
    Bicmac,
    Mix,
    Pepsi,
    Chocolate
} from '../assets';
import { Product } from "../../../data/index";
import Cards from "../../components/Cards";
import { useState } from "react";


function Dashboard() {
    const [ctg, setCategory] = useState('');

    const handleKtgClick = (link: string) => {
        setCategory(link);
    };

    const popularNow = [1, 3, 12, 13, 5, 6];
    const topWeek = [3, 4, 17, 14, 10, 11];
    const reCent = [1, 4, 6, 8];


    return (
        <Block className='mains'>
            <Navbar className='custom-color' large transparent sliding={false}>
                <NavTitle sliding>Seven Burger</NavTitle>
                <NavTitleLarge >Seven Burger</NavTitleLarge>
            </Navbar>
            {/* {input cari} */}
            <Searchbar searchContainer=".search-list" searchIn=".item-title" />

            {/* {handle untuk list notfound} */}
            <List strongIos outlineIos dividersIos className="searchbar-not-found">
                <ListItem title="Nothing found" />
            </List>

            <List strongIos outlineIos dividersIos className="search-list searchbar-found">

                {/* {untuk slide pizza} */}
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

                {/* {untuk breadcumbs category} */}
                <BlockTitle>Categories</BlockTitle>
                <Block strongIos outlineIos>
                    <Breadcrumbs>
                        <BreadcrumbsItem style={{ backgroundColor: ctg === "#burger" ? '#BA1924' : '#F2EEF2' }}>
                            <img className='iconss' src={Bicmac} alt="" />
                            <Link
                                tabLink="#burger"
                                onClick={() => handleKtgClick("#burger")}
                                text="Burger"
                                className={ctg === "#burger" ? 'link-active' : 'link-inactive'}
                            />
                        </BreadcrumbsItem>
                        <BreadcrumbsItem style={{ backgroundColor: ctg === "#pizza" ? '#BA1924' : '#F2EEF2' }}>
                            <img className='iconss' src={Mix} alt="" />
                            <Link tabLink="#pizza"
                                onClick={() => handleKtgClick("#pizza")}
                                className={ctg === "#pizza" ? 'link-active' : 'link-inactive'}
                                text="Pizza" />
                        </BreadcrumbsItem>
                        <BreadcrumbsItem style={{ backgroundColor: ctg === "#desserts" ? '#BA1924' : '#F2EEF2' }}>
                            <img className='iconss' src={Chocolate} alt="" />
                            <Link tabLink="#desserts"
                                onClick={() => handleKtgClick("#desserts")}
                                className={ctg === "#desserts" ? 'link-active' : 'link-inactive'}
                                text="Desserts" />
                        </BreadcrumbsItem>
                        <BreadcrumbsItem style={{ backgroundColor: ctg === "#drinks" ? '#BA1924' : '#F2EEF2' }}>
                            <img className='iconss' src={Pepsi} alt="" />
                            <Link tabLink="#drinks" text="Drinks"
                                onClick={() => handleKtgClick("#drinks")}
                                className={ctg === "#drinks" ? 'link-active' : 'link-inactive'}
                            />
                        </BreadcrumbsItem>
                    </Breadcrumbs>
                </Block>

                {/* {untuk tab category} */}
                <Block className='productts' style={{ display: ctg ? 'block' : 'none' }}>
                    <Tabs>
                        <Tab id="burger" tabActive>
                            <Block className='containerrs productts'>
                                <Block className='containnns prodc'>
                                    {Product.filter(product => product.category === "burger").map(product => (
                                        <Cards key={product.id} product={product} />
                                    ))}
                                </Block>
                            </Block>
                        </Tab>
                        <Tab id="pizza" >
                            <Block className='containerrs productts'>
                                <Block className='containnns prodc'>
                                    {Product.filter(product => product.category === "pizza").map(product => (
                                        <Cards key={product.id} product={product} />
                                    ))}
                                </Block>
                            </Block>
                        </Tab>
                        <Tab id="desserts" >
                            <Block className='containerrs productts'>
                                <Block className='containnns prodc'>
                                    {Product.filter(product => product.category === "desserts").map(product => (
                                        <Cards key={product.id} product={product} />
                                    ))}
                                </Block>
                            </Block>
                        </Tab>
                        <Tab id="drinks" >
                            <Block className='containerrs productts'>
                                <Block className='containnns prodc'>
                                    {Product.filter(product => product.category === "drinks").map(product => (
                                        <Cards key={product.id} product={product} />
                                    ))}
                                </Block>
                            </Block>
                        </Tab>
                    </Tabs>
                </Block>

                {/* {untuk list item} */}
                <Block style={{ display: ctg ? 'none' : 'block' }}>
                    <BlockTitle>Popular Now</BlockTitle>
                    <Block className='containerr '>
                        <Block className='containnn productt'>
                            {Product.filter(product => popularNow.includes(product.id)).map(product => (
                                <Cards key={product.id} product={product} />
                            ))}
                        </Block>
                    </Block>
                    <BlockTitle>Top of the week</BlockTitle>
                    <Block className='containerr '>
                        <Block className='containnn productt'>
                            {Product.filter(product => topWeek.includes(product.id)).map(product => (
                                <Cards key={product.id} product={product} />
                            ))}
                        </Block>
                    </Block>

                    <BlockTitle>Recently viewed</BlockTitle>
                    <Block className='containerr '>
                        <Block className='containnn productt'>
                            {Product.filter(product => reCent.includes(product.id)).map(product => (
                                <Cards key={product.id} product={product} />
                            ))}
                        </Block>
                    </Block>
                </Block>
            </List>
        </Block>
    )
}

export default Dashboard;