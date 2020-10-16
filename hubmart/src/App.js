import React from 'react'
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './store/index';
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faSignOutAlt,
  faUserAlt,
  faDownload,
  faPaperPlane,
  faHome,
  faCreditCard,
  faShoppingBasket,
  faTachometerAlt,
  faClock,
  faTruck,
  faCartArrowDown,
  faMapMarkerAlt,
  faUser,
  faTh,
  faGripVertical,
  faThLarge,
  faGripLinesVertical,
  faTrashAlt,
  faShoppingCart,
  faSearch,
  faLongArrowAltRight

} from "@fortawesome/free-solid-svg-icons";
import "react-slideshow-image/dist/styles.css";
import "swiper/swiper-bundle.css";
import Shop from './components/mainbody/Shop';
import MainApp from "./components/main/MainApp";
import Layout from "./components/main/Layout";
import ProductDetail from "./components/mainbody/ProductDetail";
import DashBoard from "./components/dashboard/DashBoard";
import LoginSignupForm from "./components/dashboard/LoginSignup";
import TrackOrders from "./components/mainbody/TrackOrders";

import ViewCartPage from "./components/dashboard/ViewCartPage";
import PrivateRoute from "./components/main/PrivateRoute";
library.add(
  faStar,
  faSignOutAlt,
  faUserAlt,
  faDownload,
  faPaperPlane,
  faThLarge,
  faCartArrowDown,
  faMapMarkerAlt,
  faUser,
  faTh,
  faGripVertical,
  faGripLinesVertical,
  faHome,
  faCreditCard,
  faShoppingBasket,
  faTachometerAlt,
  faClock,
  faTruck,
  faTrashAlt,
  faShoppingCart,
  faSearch,
  faLongArrowAltRight
);
function App() {
  return (
    <Provider store={store}>
      <Router>
      <PersistGate persistor={persistor}>
      <Layout>
          <Switch>
            <div id="content">
              <PrivateRoute exact path="/my-account" component={DashBoard} />
              <Route exact={true} path="/" component={MainApp} />
              <Route path="/products/:id" component={ProductDetail} />
              <Route path="/shop" component={Shop} />
              <Route path="/track-your-order" component={TrackOrders} />
              <Route path="/my-cart" component={ViewCartPage} />
              <Route
                path="/login-signup"
                render={() =>
                  this.props.currentUser ? <Redirect to="/my-account" /> : <LoginSignupForm />
                }
              />
            </div>
          </Switch>
        </Layout>
    </PersistGate>
    </Router>
    </Provider>
  );
}
export default App;
