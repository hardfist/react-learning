import React,{Component} from 'react'
import classnames from 'classnames'
import TabNav from './TabNav'
import TabContent from './TabContent'
import './Tabs.css'
export default class extends Component{
    constructor(props){
        super(props)
        let activeIndex = this.props.activeIndex || 0
        this.state={
            activeIndex,
            prevIndex: activeIndex
        }
        this.handleTabClick = this.handleTabClick.bind(this)
    }
    static defaultProps={
        onChange:(e)=>{console.log(e)}
    }
    handleTabClick(activeIndex){
        const prevIndex = this.state.activeIndex 
        this.setState({
            activeIndex,
            prevIndex
        })
        this.props.onChange({
            activeIndex,
            prevIndex
        })
    }
    renderContent(){
        const {children} = this.props
        return (
            <TabContent
                key="tabcontent"
                activeIndex={this.state.activeIndex}
                panels={children}
            />
        )
    }
    renderNav(){
        const {children} = this.props
        return (
            <TabNav
                key="tabBar"
                onTabClick ={this.handleTabClick}
                panels={children}
                activeIndex = {this.state.activeIndex}
            />
        )
    }
    render(){
        return(
            <div className='tabs'>
                {this.renderNav()}
                {this.renderContent()}
            </div>
        )
    }
}