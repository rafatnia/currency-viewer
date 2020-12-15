import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Currency.css';
import * as actionCreators from './../../store/actions/index';
import Group from '../../components/Group/Group';



class Currency extends Component {
    state = {

    }


    componentDidMount () {
        this.props.getCurrency();
    }


    render () {
        return (
            <div className={`Currency ${this.props.data == null ? 'Loading' : ''}`}>
                <Group />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.currency.data,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCurrency: () => dispatch(actionCreators.getCurrency())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Currency);