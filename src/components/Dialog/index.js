import React,{Component} from 'react'

export default class Dialog extends Component{
    render(){
        return (
            <div>
                <div className="left">
                {this.props.left}
                </div>
                <div className="right">
                {this.props.right}
                </div>
            </div>
                
        )
    }
}