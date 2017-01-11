import React,{Component} from 'react'
export default class Select extends Component{
    constructor(props){
        super(props)
        this.handleSelect = this.handleSelect.bind(this)
        this.state = {
            value:'b'
        }
    }
    handleSelect(e){
        this.setState((prevState)=>{
            console.log('prevState:',prevState)
        })
    }
    render(){
        const {value}  = this.state;
        return(
            <select value={this.state.value} onChange={this.handleSelect}>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
            </select>
        )
    }
}