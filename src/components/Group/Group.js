import React from 'react';
import { connect } from 'react-redux';
import './Group.css';



const group = (props) => {
    return (
        <div className={`CurrencyGroup`}>
            <div className={`CurrencyGroupTitle`}>{props.title}</div>
            <div>
                hello
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.currency.data,
    }
}


export default connect(mapStateToProps)(group);