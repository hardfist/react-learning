import React,{Component} from 'react'
export default class NameForm extends Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        console.log('a name was submited',this.input.value)
        event.preventDefault()
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                    defaultValue="fuck"
                     type="text" 
                     ref={(input) => this.input = input}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}