import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addTodo} from '../actions'
class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault()
        const {dispatch} = this.props
        const input = this.refs.input
        if (!input.value.trim()) {
            return
        }
        dispatch(addTodo(input.value))
        input.value = ''
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input ref="input" type="text" />
                    <button type="submit">
                        Add Todo
                </button>
                </form>
            </div>
        )
    }
}
AddTodo = connect()(AddTodo)
export default AddTodo