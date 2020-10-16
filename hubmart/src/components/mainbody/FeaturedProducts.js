import React  from "react";
import {Link} from 'react-router-dom'
import cake from '../../assets/images/cake.jpg';
import cake2 from '../../assets/images/cake2.jpg';
import cake3 from '../../assets/images/cake3.jpg';
import budwiser from '../../assets/images/budwiser.jpg';
import gold from '../../assets/images/gold.jpg';
import product from '../../assets/images/product.jpg';
import guld from '../../assets/images/guld.jpg';

import './styles/featuredproducts.scss';



function productsDisplay(evt, cityName) {
    // Declare all variables
    var i, productcontent, productlinks;
  
    // Get all elements with class="productcontent" and hide them
    productcontent = document.getElementsByClassName("productcontent");
    for (i = 0; i < productcontent.length; i++) {
      productcontent[i].style.display = "none";
    }
  
    // Get all elements with class="productlinks" and remove the class "active"
    productlinks = document.getElementsByClassName("productlinks");
    for (i = 0; i < productlinks.length; i++) {
      productlinks[i].className = productlinks[i].className.replace("active", " ");
    }
  
    // Show the current product, and add an "active" class to the button that opened the product
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
}
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
export default function FeatureProducts() {


  return (
    <div className='products'>
            <button className="productlinks active" 
                onClick={(event)=> productsDisplay(event,'Featured Products')}>
                Featured Products
            </button>
            <button className="productlinks" 
                onClick={(event)=> productsDisplay( event,'Best Selling')}>
                Best Selling
            </button>
            <button className="productlinks" 
                onClick={(event)=> productsDisplay( event,'Top Rated Products')}>
                Top Rated Products
            </button>
            <div id="Featured Products" className="productcontent" style={{display:'flex'}}>
                <div className="products-card">
                                     <div style={{display: 'flex'}}>
                                    <p className="product-type"> Hubdeli</p>
                                    <p style={{backgroundColor:'orangered',color: 'white', 
                                                marginLeft:'4rem', width:'2.2rem'}}>New</p>
                                    </div>
                                    <img src={cake} alt="John" />
                                    <Link to='/product/123'>Product</Link>
                                    <p className="title">N1,000.00 </p>
                                    <p className='oldprice'>N2,000.00</p>
                                    <div className='input'>
                                        <input className="qty" placeholder="1"/>
                                        <button className="plus">+</button>
                                        <button className="minus">-</button>
                                    </div>
                                    <button className='add-to-cart'>Add to cart</button>
                                    <div className='wish-list'>
                                        <p>Add to Wishlist</p>
                                        <p>Compare</p>
                                    </div>
                </div>
                <div className="products-card">
                                     <div style={{display: 'flex'}}>
                                    <p className="product-type"> Hubdeli</p>
                                    <p style={{backgroundColor:'orangered',color: 'white', 
                                                marginLeft:'4rem', width:'2.2rem'}}>New</p>
                                    </div>
                                    <img src={cake3} alt="John" />
                                    <Link to='/product/123'>Product</Link>
                                    <p className="title">N1,000.00 </p>
                                    <p className='oldprice'>N2,000.00</p>
                                    <div className='input'>
                                        <input className="qty" placeholder="1"/>
                                        <button className="plus">+</button>
                                        <button className="minus">-</button>
                                    </div>
                                    <button className='add-to-cart'>Add to cart</button>
                                    <div className='wish-list'>
                                        <p>Add to Wishlist</p>
                                        <p>Compare</p>
                                    </div>
                </div>
                <div className="products-card">
                                     <div style={{display: 'flex'}}>
                                    <p className="product-type"> Hubdeli</p>
                                    <p style={{backgroundColor:'orangered',color: 'white', 
                                                marginLeft:'4rem', width:'2.2rem'}}>New</p>
                                    </div>
                                    <img src={cake} alt="John" />
                                    <Link to='/product/123'>Product</Link>
                                    <p className="title">N1,000.00 </p>
                                    <p className='oldprice'>N2,000.00</p>
                                    <div className='input'>
                                        <input className="qty" placeholder="1"/>
                                        <button className="plus">+</button>
                                        <button className="minus">-</button>
                                    </div>
                                    <button className='add-to-cart'>Add to cart</button>
                                    <div className='wish-list'>
                                        <p>Add to Wishlist</p>
                                        <p>Compare</p>
                                    </div>
                </div>
                <div className="products-card">
                                    <div style={{display: 'flex'}}>
                                    <p className="product-type"> Hubdeli</p>
                                    <p style={{backgroundColor:'orangered',color: 'white', 
                                                marginLeft:'4rem', width:'2.2rem'}}>New</p>
                                    </div>
                                    <img src={cake2} alt="John" />
                                    <Link to='/product/123'>Product</Link>
                                    <p className="title">N1,000.00 </p>
                                    <p className='oldprice'>N2,000.00</p>
                                    <div className='input'>
                                        <input className="qty" placeholder="1"/>
                                        <button className="plus">+</button>
                                        <button className="minus">-</button>
                                    </div>
                                    <button className='add-to-cart'>Add to cart</button>
                                    <div className='wish-list'>
                                        <p>Add to Wishlist</p>
                                        <p>Compare</p>
                                    </div>
                </div>
                <div className="products-card">
                                     <div style={{display: 'flex'}}>
                                    <p className="product-type"> Hubdeli</p>
                                    <p style={{backgroundColor:'orangered',color: 'white', 
                                                marginLeft:'4rem', width:'2.2rem'}}>New</p>
                                    </div>
                                    <img src={cake3} alt="John" />
                                    <Link to='/product/123'>Product</Link>
                                    <p className="title">N1,000.00 </p>
                                    <p className='oldprice'>N2,000.00</p>
                                    <div className='input'>
                                        <input className="qty" placeholder="1"/>
                                        <button className="plus">+</button>
                                        <button className="minus">-</button>
                                    </div>
                                    <button className='add-to-cart'>Add to cart</button>
                                    <div className='wish-list'>
                                        <p>Add to Wishlist</p>
                                        <p>Compare</p>
                                    </div>
                </div>
                <div className="products-cards">
                                     <div style={{display: 'flex'}}>
                                    <p className="product-type"> Hubdeli</p>
                                    <p style={{backgroundColor:'orangered',color: 'white', 
                                                marginLeft:'4rem', width:'2.2rem'}}>New</p>
                                    </div>
                                    <img src={cake3} alt="John" />
                                    <Link to='/product/123'>Product</Link>
                                    <p className="title">N1,000.00 </p>
                                    <p className='oldprice'>N2,000.00</p>
                                    <div className='input'>
                                        <input className="qty" placeholder="1"/>
                                        <button className="plus">+</button>
                                        <button className="minus">-</button>
                                    </div>
                                    <button className='add-to-cart'>Add to cart</button>
                                    <div className='wish-list'>
                                        <p>Add to Wishlist</p>
                                        <p>Compare</p>
                                    </div>
                </div>
            </div>
            <div id="Best Selling" className="productcontent">
                <div className="products-card">
                                     <div style={{display: 'flex'}}>
                                    <p className="product-type"> Hubdeli</p>
                                    <p style={{backgroundColor:'orangered',color: 'white', 
                                                marginLeft:'4rem', width:'2.2rem'}}>New</p>
                                    </div>
                                    <img src={gold} alt="John" />
                                    <Link to='/product/123'>Product</Link>
                                    <p className="title">N1,000.00 </p>
                                    <p className='oldprice'>N2,000.00</p>
                                    <div className='input'>
                                        <input className="qty" placeholder="1"/>
                                        <button className="plus">+</button>
                                        <button className="minus">-</button>
                                    </div>
                                    <button className='add-to-cart'>Add to cart</button>
                                    <div className='wish-list'>
                                        <p>Add to Wishlist</p>
                                        <p>Compare</p>
                                    </div>
                </div>
                <div className="products-card">
                                     <div style={{display: 'flex'}}>
                                    <p className="product-type"> Hubdeli</p>
                                    <p style={{backgroundColor:'orangered',color: 'white', 
                                                marginLeft:'4rem', width:'2.2rem'}}>New</p>
                                    </div>
                                    <img src={guld} alt="John" />
                                    <Link to='/product/123'>Product</Link>
                                    <p className="title">N1,000.00 </p>
                                    <p className='oldprice'>N2,000.00</p>
                                    <div className='input'>
                                        <input className="qty" placeholder="1"/>
                                        <button className="plus">+</button>
                                        <button className="minus">-</button>
                                    </div>
                                    <button className='add-to-cart'>Add to cart</button>
                                    <div className='wish-list'>
                                        <p>Add to Wishlist</p>
                                        <p>Compare</p>
                                    </div>
                </div>
                <div className="products-card">
                                     <div style={{display: 'flex'}}>
                                    <p className="product-type"> Hubdeli</p>
                                    <p style={{backgroundColor:'orangered',color: 'white', 
                                                marginLeft:'4rem', width:'2.2rem'}}>New</p>
                                    </div>
                                    <img src={budwiser} alt="John" />
                                    <Link to='/product/123'>Product</Link>
                                    <p className="title">N1,000.00 </p>
                                    <p className='oldprice'>N2,000.00</p>
                                    <div className='input'>
                                        <input className="qty" placeholder="1"/>
                                        <button className="plus">+</button>
                                        <button className="minus">-</button>
                                    </div>
                                    <button className='add-to-cart'>Add to cart</button>
                                    <div className='wish-list'>
                                        <p>Add to Wishlist</p>
                                        <p>Compare</p>
                                    </div>
                </div>
                <div className="products-card">
                                     <div style={{display: 'flex'}}>
                                    <p className="product-type"> Hubdeli</p>
                                    <p style={{backgroundColor:'orangered',color: 'white', 
                                                marginLeft:'4rem', width:'2.2rem'}}>New</p>
                                    </div>
                                    <img src={gold} alt="John" />
                                    <Link to='/product/123'>Product</Link>
                                    <p className="title">N1,000.00 </p>
                                    <p className='oldprice'>N2,000.00</p>
                                    <div className='input'>
                                        <input className="qty" placeholder="1"/>
                                        <button className="plus">+</button>
                                        <button className="minus">-</button>
                                    </div>
                                    <button className='add-to-cart'>Add to cart</button>
                                    <div className='wish-list'>
                                        <p>Add to Wishlist</p>
                                        <p>Compare</p>
                                    </div>
                </div>
                <div className="products-card">
                                     <div style={{display: 'flex'}}>
                                    <p className="product-type"> Hubdeli</p>
                                    <p style={{backgroundColor:'orangered',color: 'white', 
                                                marginLeft:'4rem', width:'2.2rem'}}>New</p>
                                    </div>
                                    <img src={guld} alt="John" />
                                    <Link to='/product/123'>Product</Link>
                                    <p className="title">N1,000.00 </p>
                                    <p className='oldprice'>N2,000.00</p>
                                    <div className='input'>
                                        <input className="qty" placeholder="1"/>
                                        <button className="plus">+</button>
                                        <button className="minus">-</button>
                                    </div>
                                    <button className='add-to-cart'>Add to cart</button>
                                    <div className='wish-list'>
                                        <p>Add to Wishlist</p>
                                        <p>Compare</p>
                                    </div>
                </div>
                <div className="products-cards">
                                     <div style={{display: 'flex'}}>
                                    <p className="product-type"> Hubdeli</p>
                                    <p style={{backgroundColor:'orangered',color: 'white', 
                                                marginLeft:'4rem', width:'2.2rem'}}>New</p>
                                    </div>
                                    <img src={guld} alt="John" />
                                    <Link to='/product/123'>Product</Link>
                                    <p className="title">N1,000.00 </p>
                                    <p className='oldprice'>N2,000.00</p>
                                    <div className='input'>
                                        <input className="qty" placeholder="1"/>
                                        <button className="plus">+</button>
                                        <button className="minus">-</button>
                                    </div>
                                    <button className='add-to-cart'>Add to cart</button>
                                    <div className='wish-list'>
                                        <p>Add to Wishlist</p>
                                        <p>Compare</p>
                                    </div>
                </div>
            </div>
            <div id="Top Rated Products" className="productcontent">
                <div className="products-card">
                                     <div style={{display: 'flex'}}>
                                    <p className="product-type"> Hubdeli</p>
                                    <p style={{backgroundColor:'orangered',color: 'white', 
                                                marginLeft:'4rem', width:'2.2rem'}}>New</p>
                                    </div>
                                    <img src={product} alt="John" />
                                    <Link to='/product/123'>Product</Link>
                                    <p className="title">N1,000.00 </p>
                                    <p className='oldprice'>N2,000.00</p>
                                    <div className='input'>
                                        <input className="qty" placeholder="1"/>
                                        <button className="plus">+</button>
                                        <button className="minus">-</button>
                                    </div>
                                    <button className='add-to-cart'>Add to cart</button>
                                    <div className='wish-list'>
                                        <p>Add to Wishlist</p>
                                        <p>Compare</p>
                                    </div>
                </div>
                <div className="products-card">
                                     <div style={{display: 'flex'}}>
                                    <p className="product-type"> Hubdeli</p>
                                    <p style={{backgroundColor:'orangered',color: 'white', 
                                                marginLeft:'4rem', width:'2.2rem'}}>New</p>
                                    </div>
                                    <img src={cake2} alt="John" />
                                    <Link to='/product/123'>Product</Link>
                                    <p className="title">N1,000.00 </p>
                                    <p className='oldprice'>N2,000.00</p>
                                    <div className='input'>
                                        <input className="qty" placeholder="1"/>
                                        <button className="plus">+</button>
                                        <button className="minus">-</button>
                                    </div>
                                    <button className='add-to-cart'>Add to cart</button>
                                    <div className='wish-list'>
                                        <p>Add to Wishlist</p>
                                        <p>Compare</p>
                                    </div>
                </div>
                <div className="products-card">
                                     <div style={{display: 'flex'}}>
                                    <p className="product-type"> Hubdeli</p>
                                    <p style={{backgroundColor:'orangered',color: 'white', 
                                                marginLeft:'4rem', width:'2.2rem'}}>New</p>
                                    </div>
                                    <img src={cake3} alt="John" />
                                    <Link to='/product/123'>Product</Link>
                                    <p className="title">N1,000.00 </p>
                                    <p className='oldprice'>N2,000.00</p>
                                    <div className='input'>
                                        <input className="qty" placeholder="1"/>
                                        <button className="plus">+</button>
                                        <button className="minus">-</button>
                                    </div>
                                    <button className='add-to-cart'>Add to cart</button>
                                    <div className='wish-list'>
                                        <p>Add to Wishlist</p>
                                        <p>Compare</p>
                                    </div>
                </div>
                <div className="products-card">
                                     <div style={{display: 'flex'}}>
                                    <p className="product-type"> Hubdeli</p>
                                    <p style={{backgroundColor:'orangered',color: 'white', 
                                                marginLeft:'4rem', width:'2.2rem'}}>New</p>
                                    </div>
                                    <img src={budwiser} alt="John" />
                                    <Link to='/product/123'>Product</Link>
                                    <p className="title">N1,000.00 </p>
                                    <p className='oldprice'>N2,000.00</p>
                                    <div className='input'>
                                        <input className="qty" placeholder="1"/>
                                        <button className="plus">+</button>
                                        <button className="minus">-</button>
                                    </div>
                                    <button className='add-to-cart'>Add to cart</button>
                                    <div className='wish-list'>
                                        <p>Add to Wishlist</p>
                                        <p>Compare</p>
                                    </div>
                </div>
                <div className="products-card">
                                     <div style={{display: 'flex'}}>
                                    <p className="product-type"> Hubdeli</p>
                                    <p style={{backgroundColor:'orangered',color: 'white', 
                                                marginLeft:'4rem', width:'2.2rem'}}>New</p>
                                    </div>
                                    <img src={budwiser} alt="John" />
                                    <Link to='/product/123'>Product</Link>
                                    <p className="title">N1,000.00 </p>
                                    <p className='oldprice'>N2,000.00</p>
                                    <div className='input'>
                                        <input className="qty" placeholder="1"/>
                                        <button className="plus">+</button>
                                        <button className="minus">-</button>
                                    </div>
                                    <button className='add-to-cart'>Add to cart</button>
                                    <div className='wish-list'>
                                        <p>Add to Wishlist</p>
                                        <p>Compare</p>
                                    </div>
                </div>
                <div className="products-cards">
                                     <div style={{display: 'flex'}}>
                                    <p className="product-type"> Hubdeli</p>
                                    <p style={{backgroundColor:'orangered',color: 'white', 
                                                marginLeft:'4rem', width:'2.2rem'}}>New</p>
                                    </div>
                                    <img src={gold} alt="John" />
                                    <Link to='/product/123'>Product</Link>
                                    <p className="title">N1,000.00 </p>
                                    <p className='oldprice'>N2,000.00</p>
                                    <div className='input'>
                                        <input className="qty" placeholder="1"/>
                                        <button className="plus">+</button>
                                        <button className="minus">-</button>
                                    </div>
                                    <button className='add-to-cart'>Add to cart</button>
                                    <div className='wish-list'>
                                        <p>Add to Wishlist</p>
                                        <p>Compare</p>
                                    </div>
                </div>
            </div>
    </div>        
                       

  );
}            
                                 