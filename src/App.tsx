// App.jsx
import { App, View, Panel, Page, Block, Link } from 'framework7-react';
import Home from './views/page/Home';
import Favorite from './views/page/Favorite';
import Cart from './views/page/Cart';
import Paneleft from './views/components/Paneleft';


const AppComponents = () => {

  const f7params = {
    name: 'Hamburger',
    routes: [
      {
        path: '/',
        component: Home,
      },
      {
        path: '/favorite',
        component: Favorite,
      },
      {
        path: '/cart',
        component: Cart,
      },
      {
        path: '/panel',
        component: Paneleft,
      },
      {
        path: '/panel-right',
        component: Paneleft,
      }

    ],
  };

  return (
    <App {...f7params}
      popup={{ closeOnEscape: true }}
      sheet={{ closeOnEscape: true }}
      popover={{ closeOnEscape: true }}
      actions={{ closeOnEscape: true }}>
      <Panel left cover containerEl="#panel-page" id="panel-nested">
        <Page>
          <Block strongIos outlineIos>
            <p>This is a nested panel.</p>
            <p>
              <Link panelClose>Close me</Link>
            </p>
          </Block>
        </Page>
      </Panel>
      <View
        main
        url='/'
        className="safe-areas"
        masterDetailBreakpoint={768}
      />
    </App>
  );
};


export default AppComponents;
