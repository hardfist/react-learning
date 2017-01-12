import React, { Component } from 'react'
const MyContainer1 = (WrappedComponent) => {
    return class extends WrappedComponent {
        render() {
            return super.render()
        }
    }
}
const MyContainer2 = (WrappedComponent) => {
    return class extends WrappedComponent {
        render() {
            if (this.props.loggedIn) {
                return super.render()
            } else {
                return null
            }
        }
    }
}
const MyContainer3 = (WrappedComponent) => {
    return class extends WrappedComponent {
        render() {
            const elementsTree = super.render()
            console.log('super:',elementsTree.props)
            let newProps = {}
            if (elementsTree) {
                newProps = { value: 'hahaha look at me' }
            }
            const props = Object.assign({}, elementsTree.props, newProps)  
            console.log('props:',props)          
            const newElementsTree = React.cloneElement(elementsTree, props, elementsTree.props.children)      
            return newElementsTree
        }
    }
}
const MyContainer4 = (WrappedComponent) => {
    return class extends WrappedComponent {
        render() {
            return (
                <div>
                    <h1>HOC Debugger Component</h1>
                    <p>Props</p> <pre>{JSON.stringify(this.props, null, 2)}</pre>
                    <p>State</p> <pre>{JSON.stringify(this.state, null, 2)}</pre>
                    {super.render()}
                </div>
            )
        }
    }
}
class MyComponent extends Component{
    static displayName='fuck'
    constructor(props){
        super(props)
        console.log('myprops:',props)
    }
    render(){
        return (
            <div>title:{JSON.stringify(this.props)}</div>
        )
    }
}
export default class Container extends Component {
    render() {
        const Component1 = MyContainer1(MyComponent)
        const Component2 = MyContainer2(MyComponent)
        const Component3 = MyContainer3(MyComponent)
        const Component4 = MyContainer4(MyComponent)
        return (
            <div>
                <Component1 a='a'/>
                <Component2 b='b'/>
                <Component2 loggedIn='true'/>
                <Component3 c='c'/>
                <Component4 d='d'/>
            </div>
        )
    }
}