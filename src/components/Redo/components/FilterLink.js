import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'

class Link extends Component {
    render() {
        const {active, children, onClick} = this.props
        if (active) {
            return <span>{children}</span>
        }
        return (
            <a href="#"
                onClick={
                    e => {
                        e.preventDefault()
                        onClick()
                    }
                }>
                {children}
                </a>
        )
    }
}

const mapStateToProps = (state, props) => ({
    active: props.filter === state.visibilityFilter
})
const mapDispatchToProps = (dispatch, props) => ({
    onClick: () => {
        dispatch(setVisibilityFilter(props.filter))
    }
})
const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)
export default FilterLink