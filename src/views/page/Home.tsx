

import { Page, Tab, Tabs, Views} from 'framework7-react';
import { Bottombar, Panels} from '../components';
import Dashboard from './dashboard/Dashboard';
import Favorite from './Favorite';
import Cart from './Cart';


const Home = () => {
    return (

        <Page className="page-home">
            
           <Panels />
           <Tabs>
                <Tab id="home" className="page-content" tabActive>
                    <Dashboard />
                </Tab>
                <Tab id="favorite" className="page-content">
                    <Favorite />
                </Tab>
                <Tab id="cart" className="page-content" >
                    <Cart />
                </Tab>
            </Tabs>
            <Bottombar />
        </Page>

    );
};
export default Home;