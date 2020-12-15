import React from 'react';
import { connect } from 'react-redux';
import './Group.css';



const group = (props) => {
    return (
        <div className={`CurrencyGroup`}>
            <div className={`CurrencyGroupTitle`}>{props.title}</div>
            <div className={`CurrencyGroupItems`}>
                {
                    props.items.map(ikey => {
                        return (
                            <div className={`CurrencyGroupItem`}>
                                {/* <div className={`CurrencyGroupItemRow`}>
                                    <div>واحد پول:</div>
                                    <div>{ikey.Currency}</div>
                                </div>

                                <div className={`CurrencyGroupItemSeperator`} />

                                <div className={`CurrencyGroupItemRow`}>
                                    <div>کشور:</div>
                                    <div>{ikey.Code}</div>
                                </div>
                                
                                <div className={`CurrencyGroupItemSeperator`} />

                                <div className={`CurrencyGroupItemRow`}>
                                    <div>فروش:</div>
                                    <div>{ikey.Sell}</div>
                                </div>

                                <div className={`CurrencyGroupItemSeperator`} />

                                <div className={`CurrencyGroupItemRow`}>
                                    <div>خرید:</div>
                                    <div>{ikey.Buy}</div>
                                </div> */}

                                
                            </div>
                        )
                    })
                }
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