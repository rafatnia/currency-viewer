import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Currency.css';
import * as actionCreators from './../../store/actions/index';
import Group from '../../components/Group/Group';
import refreshIcon from './../../assets/svg/refresh.svg'


class Currency extends Component {
    state = {

    }


    componentDidMount() {
        this.props.getCurrency();
    }


    render() {
        if (this.props.data == null) {
            return null
        }
        if (this.props.error) {
            return <div style={{width: '100%', height: '100%', position: 'fixed', top: '0', right: '0', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                خطا در برقراری ارتباط. دوباره صفحه را رفرش کنید
            </div>
        }
        return (
            <>
                <div className={`Currency`}>
                    <Group title='واحد پول' items={this.props.data.Currency} />
                    <Group title='طلا' items={this.props.data.Gold} />
                    <Group title='شاخص' items={this.props.data.Item} />
                </div>
                <div onClick={() => this.props.getCurrency()} className={`RefreshButtonDiv ${this.props.loading ? 'Loading' : ''}`} >
                    <img src={refreshIcon} className={`RefreshButtonIcon`} />
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.currency.data,
        loading: state.currency.loading,
        error: state.currency.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCurrency: () => dispatch(actionCreators.getCurrency())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Currency);