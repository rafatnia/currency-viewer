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
                                {
                                    Object.keys(ikey).map((zkey) => {
                                        return (
                                            <>
                                                <div className={`CurrencyGroupItemRow`}>
                                                    <div>{zkey}:</div>
                                                    <div>{ikey[zkey]}</div>
                                                </div>
                                                <div className={`CurrencyGroupItemSeperator`} />
                                            </>
                                        )
                                    })
                                }
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