import React, { Component } from 'react'
export default class Check extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            radioValue: ''
        }
    }
    handleChange(e) {
        this.setState({
            radioValue: e.target.value
        })
    }
    render() {
        const {radioValue} = this.state
        return (
            <div>
                <p>gender:</p>
                <label>
                    male:
                    <input
                        type="radio"
                        value="male"
                        checked={radioValue == 'male'}
                        onChange={this.handleChange}
                        />
                </label>

                <label>
                    female:
                <input
                        type="radio"
                        value="female"
                        checked={radioValue == "female"}
                        onChange={this.handleChange} />
                </label>
            </div>
        )
    }
}