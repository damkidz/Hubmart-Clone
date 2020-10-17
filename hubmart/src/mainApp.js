import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Switch, Route, Redirect} from 'react-router-dom';
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
import HomePage from "./components/main/Home";
import Layout from "./components/main/Layout";
import ProductDetail from "./components/mainbody/ProductDetail";
import DashBoard from "./components/dashboard/DashBoard";
import LoginForm from "./components/auth/Login";
import TrackOrders from "./components/mainbody/TrackOrders";
import ViewCartPage from "./components/dashboard/ViewCartPage";
import PrivateRoute from "./components/main/PrivateRoute";
import {loadUser} from './actions/auth/actions'


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




class mainApp extends Component {
    render() {
        return (
            <Layout>
           <Switch>
             <div id="content">
               <PrivateRoute exact path="/my-account" component={DashBoard} />
               <Route exact={true} path="/" component={HomePage} />
               <Route path="/products/:id" component={ProductDetail} />
               <Route path="/shop" component={Shop} />
               <Route path="/track-your-order" component={TrackOrders} />
               <Route path="/my-cart" component={ViewCartPage} />
               <Route
                 path="/login-signup"
                 render={() =>
                   this.props.currentUser ? <Redirect to="/my-account" /> : <LoginForm />
                 }
               />
             </div>
           </Switch>
         </Layout>
        )
    }
}
const mapStateToProps = (state) =>({
    currentUser: state.authReducer.currentUser
})
export default connect(mapStateToProps,{loadUser})(mainApp);