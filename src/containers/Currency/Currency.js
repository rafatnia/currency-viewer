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
        if(this.props.data == null) {
            return null
        }
        return (
            <div className={`Currency`}>
                <Group title='واحد پول' items={this.props.data.Currency} />
                <Group title='طلا' items={this.props.data.Gold} />
                <Group title='شاخص' items={this.props.data.Item} />
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