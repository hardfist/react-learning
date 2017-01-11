import React,{Component} from 'react'
const DataSource = {}
class ComponentList extends Component{
    constructor(){
        super()
        
    }
    componentDidMount(){
        DataSource.addChangeListener(this.handleChange)
    }
    componentWillMount(){
        DataSource.removeChangeListener(this.handleChange)
    }
    handleChange(){
        this.setState({
            comments:DataSource.getComments()
        })
    }
    render(){
        return(
            <div>
                
            </div>
        )
    }
}