import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SwiperCore, { Autoplay, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { addCartItems } from "../../actions/cart/actions";
import cake from '../../assets/images/cake.jpg';
import {formatter} from '../../utils/currencyFormater'

// install Swiper components
SwiperCore.use([Autoplay, Pagination, Scrollbar, A11y]);

const shopProducts = ({ allProduct, addCartItems }) => {
  const Products = allProduct.map((product) => {
    return (
      <SwiperSlide key={product.id} id={product.id}>
        <div className="card">
          <p className="product-type"> {product.slug}</p>
          <img src={cake} alt="hubmart" />
          <Link to={`/products/${product.id}/${product.name}`}>{product.name}</Link>
          <p className="title">{formatter.format(product.price)}</p>
          <button
            className="add-to-cart"
            onClick={() => {
              addCartItems(product);
              console.log(product);
            }}
          >
            Add to cart
          </button>
          <div className="wish-list">
            <p>Add to Wishlist</p>
            <p>Compare</p>
          </div>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <div>
      <Swiper spaceBetween={0} slidesPerView={4}>
        {Products}
      </Swiper>
    </div>
  );
};

const mapStateToProps = ({ allProductReducer: { allProduct } }) => ({
  allProduct,
});

export default connect(mapStateToProps, { addCartItems })(shopProducts);
