import React, { Component } from 'react'
export default class AutoFocus extends Component {
    render() {
        return (
            <CustomTextInput/>
        )
    }
}
class CustomTextInput extends Component {
    componentDidMount(){
        this.textInput.focus()
    }
    handleClick(){
        this.textInput.focus()
    }
    render() {
        return (
            <div>
                <input type="text"
                    ref={(input) => { this.textInput = input } }
                    />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.handleClick.bind(this)}
                    />
            </div>
        )
    }
}