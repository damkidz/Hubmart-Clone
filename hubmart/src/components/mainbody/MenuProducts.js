import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./styles/MenuProducts.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SwiperCore, { Autoplay, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper } from "swiper/react";
import { createStructuredSelector } from "reselect";
import loader from "../../assets/images/loader.gif";
import { connect, useDispatch } from "react-redux";
import { addCartItems } from "../../actions/cart/actions";
import {
  AllProductSelector,
  isLoadingSelector,
} from "../../reducers/productReducer/selector";
import { fetchAllProducts } from "../../actions/products/actions";
import ShopProducts from "./ShopProducts";
import SideMenu from "./SideMenu";
import { openCity } from "./utilities/tabOpen";
import { useEffect } from "react";



// install Swiper components
SwiperCore.use([Autoplay, Pagination, Scrollbar, A11y]);

const MenuProducts = ({isLoading,allProducts, history}) =>{
const dispatch = useDispatch();
 useEffect(()=> {
   dispatch(fetchAllProducts())
   return ()=> ({
    //  
   })
 },[])
 
    return (
      <>
        <div className="menuProducts">
        
          <div className="tab">
            <button
              className="tablinks active"
              onClick={(event) => openCity(event, "menu-product1")}
            >
              Hubdeli
            </button>
            <button className="tablinks" onClick={(event) => openCity(event, "menu-product2")}>
              Beverages
            </button>
            <button className="tablinks" onClick={(event) => openCity(event, "menu-product3")}>
              Grocery
            </button>

            <div id="menu-product1" className="tabcontent" style={{ display: "flex" }}>
              {isLoading ? (
                <img className="img_loader" src={loader} />
              ) : (
                <Swiper
                  spaceBetween={5}
                  slidesPerView={4}
                  autoplay
                  pagination={{ clickable: true }}
                >
                  <ShopProducts />
                </Swiper>
              )}
            </div>
            <div id="menu-product2" className="tabcontent">
              no Product
            </div>
            <div id="menu-product3" className="tabcontent">
            no Product
            </div>
          </div>
        </div>
        <div className="go-store">
          <button onClick={() => history.push('/shop')}>
            Go to Store
            <span>
              <FontAwesomeIcon icon='long-arrow-alt-right' className="direct-icon"  />
            </span>
          </button>
        </div>
      </>
    );
  };

const mapStateToPros = createStructuredSelector({
  allProducts: AllProductSelector,
  isLoading: isLoadingSelector,
});
export default withRouter(connect(mapStateToPros, { fetchAllProducts, addCartItems })(MenuProducts));
