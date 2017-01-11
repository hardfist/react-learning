import React, { Component } from 'react'
export default class MultiCheck extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            coffee: ['a','c','b']
        }
    }
    handleChange(e) {
        console.log('state:', this.state)
        const {checked, value} = e.target
        console.log('checked,value',checked,value)
        let {coffee} = this.state
        if(checked && coffee.indexOf(value) === -1){
            coffee.push(value)
        }else{
            coffee = coffee.filter( i => i!=value)
        }
        this.setState({
            coffee:coffee
        })

    }
    render() {
        const {coffee} = this.state
        return (
            <div>
                <label>
                    <input type="checkbox"
                        onChange={this.handleChange}
                        checked={coffee.indexOf('a')!==-1}
                        value="a" />A
                </label>
                <label>
                    <input type="checkbox"
                        onChange={this.handleChange}
                        checked={coffee.indexOf('b')!==-1}
                        value="b" />
                    B
                </label>
                <label>
                    <input type="checkbox"
                        onChange={this.handleChange}
                        checked={coffee.indexOf('c')!==-1}
                        value="c" />
                    C
                </label>
            </div>
        )
    }
}