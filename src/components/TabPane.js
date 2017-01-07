import React, { Component } from 'react'
import classnames from 'classnames'
export default class TabPane extends Component {
    render() {
        const {children, isActive, className} = this.props
        return (
            <div
            className={className}
            >
                {children}
            </div>
        )
    }
}