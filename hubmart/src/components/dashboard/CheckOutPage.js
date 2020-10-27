import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { authUserSelector } from '../../reducers/authReducer/selector';
import Shipping from './Shipping'
import Billing from './Billing'
import LoginForm from '../auth/Login'
export const CheckOutPage = ({isAuthenticated}) => {
    return (
        <>
            {
                isAuthenticated ? 
                <div>
                    <Billing/>
                </div>
                :
                <div>
                    <LoginForm/>
                    <Shipping/>
                    <Billing/>
                </div>
            }
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    isAuthenticated: authUserSelector
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutPage)
