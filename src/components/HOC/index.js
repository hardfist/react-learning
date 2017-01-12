import React,{Component} from 'react'
const MyContainer = (WrappedComponent) =>{
    return class extends Component{
        proc(instance){
            console.log('instance:',instance)
        }
        render(){
            const props = Object.assign({},this.props,{
                ref: this.proc.bind(this),
                fuck: 'fuck'
            })
            console.log('props:',props)
            return <WrappedComponent {...props}/>
        }
    }
}
class Test extends Component{
    render(){
        console.log('props2:',this.props)
        return (
            <div>
            props:{JSON.stringify(this.props)}
            </div>
        )
    }
}
const HOC = MyContainer(Test)
export default HOC