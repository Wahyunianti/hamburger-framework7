// App.jsx
import { App, View} from 'framework7-react';
import Home from './views/page/Home';
import Favorite from './views/page/Favorite';
import Cart from './views/page/Cart';


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
      }
    ],
  };

  return (
    <App {...f7params}
      popup={{ closeOnEscape: true }}
      sheet={{ closeOnEscape: true }}
      popover={{ closeOnEscape: true }}
      actions={{ closeOnEscape: true }}>
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
