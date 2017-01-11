import React,{Component} from 'react'
export default class Calculator extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
    }
    handleChange(e){
        this.setState({
            value: e.target.value  
        })
    }
    render(){
        const value = this.state.value 
        return (
            <fieldset>
            <legend>Enter temperature in Cel</legend>
            <input 
                value={value}
                onChange={this.handleChange.bind(this)}/>
            </fieldset>
        )
    }
}