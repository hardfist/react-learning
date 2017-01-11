import React,{Component} from 'react'
export default class Link extends Component{
    componentDidMount(){
        document.body.addEventListener('click',(e)=>{            
            this.e1 = e 
            console.log('equal:',this.e1 === this.e2)
           e.preventDefault()
            console.log('body clicked')
        })
        
        this.refs.link.addEventListener('click',(e)=>{
            this.e2 = e
            console.log('link clicked')
        })

    }
    handleClick(e){
        e.preventDefault()
        console.log("The link was clicked")
    }
    render(){
        return (
            <a href="http://www.baidu.com" ref="link" onClick={this.handleClick}>
            Click me 
            </a>
        )
    }
        
}