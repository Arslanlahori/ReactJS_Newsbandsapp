import React, { Component } from 'react'
import loadingspinner from './loadingspinner.gif'

export default class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={loadingspinner} alt="Loading" />
            </div>
        )
    }
}
