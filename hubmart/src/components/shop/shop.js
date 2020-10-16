import React from 'react'
import { connect } from 'react-redux'
import {fetchAllProducts }from '../../actions/products/actions'
import {AllProductSelector} from '../../reducers/productReducer/selector'
class Shop extends React.Component{
    constructor(props){
        super ()
    }

    componentDidMount(){
        this.props.fetchAllProducts()
    }
render() {
    
const {products} = this.props;
    return (
        <div>
            {products.map(product => {
                return(
                    <p key={product.id}>{product.name}</p>
                )
            })}
        </div>
    )
}
}


const mapStateToProps = (state) => ({
    products: AllProductSelector(state)
})



export default connect(mapStateToProps, {fetchAllProducts})(Shop)
