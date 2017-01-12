import React,{Component,PropTypes} from 'react'
export default class ComponentList extends Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            error : null,
            value: null 
        }
    }
    componentDidMount(){
        const {promise} = this.props 
        promise.then(resp => resp.json())
        .then(value => this.setState({
            loading:false,
            value 
        })).then(error => this.setState({
            loading: false,
            error
        }))
    }
    render(){
        if(this.state.loading){
            return <span>Loading</span>
        }else if(this.state.error != null){
            return <span>Error:{this.state.error.message}</span>
        }else{
            const list = this.state.value.commentList 
            return(
                <ul className="comment-box">
                    {list.map((entry,i)=>(
                        <li key={`response-${i}`} className="comment-item">
                            <p className="comment-item-name">{entry.name}</p>
                            <p className="comment-item-content">{entry.content}</p>
                        </li>
                    ))}
                </ul>
            )
        }
    }
}