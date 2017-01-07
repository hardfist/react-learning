import React, { Component } from 'react';
import Tabs from './components/Tabs'
import TabPane from './components/TabPane'
class App extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this) 
    this.handleTabsClick = this.handleTabsClick.bind(this)
    this.state = {
      activeIndex : 0
    }
  }
  handleChange(e){
   this.setState({
     activeIndex: parseInt(e.target.value,10)
   }) 
  }
  handleTabsClick(e){
    this.setState({
      activeIndex: e.activeIndex
    })
  }
  render() {
    return(
      <div>
        <div className="message">
        You selected {this.state.activeIndex}
        </div>
        <div className="operator">
          <span>切换Tab：</span>
          <select value={this.state.activeIndex} onChange={this.handleChange}>
            <option value="0">Tab 1</option>
            <option value="1">Tab 2</option>
            <option value="2">Tab 3</option>
          </select>
        </div>
        <Tabs activeIndex={this.state.activeIndex} className="tabs-bar" onChange={this.handleTabsClick}>
          <TabPane order="0" tab={'Tab 1'}>Tab1 Content</TabPane>
          <TabPane order="1" tab={'Tab 2'}>Tab2 Content</TabPane>
          <TabPane order="2" tab={'Tab 3'}>Tab3 Content</TabPane>
        </Tabs>
      </div>
    )
  }
}

export default App;
