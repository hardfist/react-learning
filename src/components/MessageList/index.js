import React, { Component } from 'react'
class Button extends Component {
    render() {
        return (
            <button style={{ background: this.context.color }}>
                {this.props.children}
            </button>
        )
    }
    static contextTypes={
        color:React.PropTypes.string
    }
}
class Message extends Component {
    render() {
        return (
            <div>
                {this.props.text} <Button color={this.props.color}>Delete</Button>
            </div>
        )
    }
}
export default class MessageList extends Component {
    static childContextTypes={
        color:React.PropTypes.string
    }
    getChildContext(){
        return {color:"red"}
    }
    render() {
        const color = "purple"
        const children = this.props.messages.map((message,idx) => {
            return <Message text={message.text} color={color} key={idx} />
        })
        return <div>{children}</div>

    }
}