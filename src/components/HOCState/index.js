import React, { Component } from 'react'
const MyContainer = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                name: ''
            }
            this.onNameChange = this.onNameChange.bind(this)
        }
        onNameChange(event) {
            const value = this.setState({
                name: event.target.value
            })
            console.log(value)
            
        }
        render() {
            const newProps = {
                name: {
                    value: this.state.name,
                    onChange: this.onNameChange
                }
            }
            return <WrappedComponent {...this.props} {...newProps} />
        }
    }
}
const MyComponet = MyContainer(
    class extends Component {
        render() {
            return (
                <input name="name" {...this.props.name} />
            )
        }
    }
)

export default MyComponet