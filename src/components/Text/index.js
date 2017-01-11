import React, { Component } from 'react'
export default class Text extends Component {
    constructor(props) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleTextareaChange = this.handleTextareaChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            inputValue: '',
            textareaValue: ''
        }
    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleTextareaChange(e) {
        this.setState({
            textareaValue: e.target.value
        })
    }
    handleSubmit(e){
        console.log('state:',this.state)
        e.preventDefault()
    }
    render() {
        const {textareaValue, inputValue} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <p>input:
                <input type="text"
                        value={inputValue}
                        onChange={this.handleInputChange}
                        />
                </p>
                <p>
                <input type="textarea"
                    value={textareaValue}
                    onChange={this.handleTextareaChange}
                    />
                </p>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}