import React, { Component } from 'react'
import Header from '../Header/Header'
export default class Container extends Component {
    state={
        header:"Type a header here"
    }
    render() {
        return (
            <div>
                <Header header={this.state.header}/> 
            </div>
        )
    }
}
