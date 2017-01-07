import React,{Component} from 'react'
import classnames from 'classnames'
export default class TabNav extends Component{
    getTabs(){
        const {panels,activeIndex,onTabClick} = this.props 
        return React.Children.map(panels,(child)=>{
            if(!child) {return}
            const order = parseInt(child.props.order,10) 
            let classes = classnames({
                active: order === activeIndex,
                "tabs-list-item": true
            })
            let events = {}
            events = {
                onClick: onTabClick.bind(this,order)
            }
            const ref = {}
            if(activeIndex === order){
                ref.ref = 'activeTab'
            }
            return (
                <li
                    role='tab'
                    {...events}
                    key={order}
                    className={classes}
                >
                {child.props.tab}
                </li>
            )
        })
    }
    render(){
        return (
            <div className="tabs-nav">
                <ul className="tabs-list">
                {this.getTabs()}
                </ul>
            </div>
        )
    }
}