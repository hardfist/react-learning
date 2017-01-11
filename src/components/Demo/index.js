import React,{Component} from 'react'
export default class QrCode extends Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleClickQr = this.handleClickQr.bind(this)
        this.state={
            active:false
        }
    }
    componentDidMount(){
        console.log('didMount')
        this.refs.wrapper.addEventListener('click',(e)=>{
            console.log('wrapper clicked')
        })
        document.body.addEventListener('click',(e)=>{
            console.log('body clicked')
            this.setState({
                active:false 
            })
        })
    }
    componentWillUnmount(){
        console.log('will unmount')
        document.body.removeEventListener('click')
    }
    handleClick(e){
        console.log('handleClick')
        e.stopPropagation();
        this.setState({
            active: !this.state.active 
        })
    }
    handleClickQr(e){
        console.log('handleClickQR')
        e.stopPropagation()
    }
    render(){
        console.log('this.state',this.state)
        return(
            <div className="qr-wrapper" ref='wrapper'>
                <button className="qr" onClick={this.handleClick.bind(this)} ref='button'>二维码</button>
                <div className="code" ref='qr'
                    style={{display: this.state.active ? 'block' : 'none'}}
                    onClick={this.handleClickQr.bind(this)}
                    >
                    <img src='qr.jpg' alt='qr'/>
                </div>
            </div>
        )
    }
}