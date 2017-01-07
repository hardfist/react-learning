import React,{Component} from 'react'
import classnames from 'classnames'
export default class TabContent extends Component{
    getTabPanes(){
        const {activeIndex,panels} = this.props 
        return React.Children.map(panels,(child)=>{
            if(!child) {return;}

            const order = parseInt(child.props.order,10)
            let classes ={
                "tabs-pane-content":true,
                active: order === activeIndex
            }
            console.log(activeIndex)
            return React.cloneElement(child,{
                className:classnames(classes),
                children:child.props.children
            })
        })
    }
    render(){
        return(
            <div className="tabs-pane">
                {this.getTabPanes()}
            </div>
        )
    }
}