import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, browserHistory } from 'react-router'
import './style.css'
const App = ({children}) => <div>{children}</div>
const About = () => (
    <div>
        <Nav />
        About
    </div>)
const History = () => (
    <div>
        <Nav />
        History
    </div>)
const Home = () => (
    <div>
        <Nav />
        Home
    </div>)
const Form = () => {
    function handleSubmit(e) {
        e.preventDefault()
        const username = e.target.elements[0].value
        const repo = e.target.elements[1].value
        const path = `about?username=${username}&repos=${repo}`
        hashHistory.push(path)
    }
    return (
        <div>
            <Nav />
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="userName" />
                <input type="text" placeholder="repo" />
                <button type="submit">Go</button>
            </form>
        </div>
    )
}
const Nav = () => (
    <div>
        <ul role="nav">
            <li><Link to="/about" activeClassName="active">About</Link></li>
            <li><Link to="/history" activeClassName="active">history</Link></li>
            <li><Link to="/home" activeClassName="active">Home</Link></li>
            <li><Link to="/form" activeClassName="active">Form</Link></li>
        </ul>
    </div>
)
function handleEnter({params}, replace) {
    console.log('enter')
    console.log('params:', params)
}
function handleLeave({params}, replace) {
    console.log('leave')
}
const routes =
    <Route path="/" component={App}>
        <Route path="about"
            component={About}
            onLeave={handleLeave}
            onEnter={handleEnter} />
        <Route path="history" component={History} />
        <Route path="form" component={Form} />
        <Route path="home" component={Home} />
    </Route>
ReactDOM.render(
    <Router history={hashHistory} routes={routes}>
    </Router>,
    document.getElementById('root')
)