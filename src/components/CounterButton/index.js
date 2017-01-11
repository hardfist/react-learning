import React,{Component,PureComponent} from 'react'
export default class CounterButton extends Component{
    constructor(props){
        super(props)
        this.state ={state:{count:1}}
    }
    handleClick(){
        this.setState((state)=>{
            state.state.count++;
            return state 
        })
    }
    render(){
        return (
            <button 
                color={this.props.color}
                onClick={this.handleClick.bind(this)}>
                Count:{this.state.state.count}
            </button>
        )
    }
}