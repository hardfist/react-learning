import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPostsFailure, loadPostsRequest, loadPostsSuccess, selectPost } from './actionCreator'
class Post extends Component {
    render() {
        const {post} = this.props
        return (
            <div>post:{JSON.stringify(post)}</div>
        )
    }
}
class Select extends Component {
    handleClick(e) {
        const {handleSelect} = this.props
        handleSelect(e.target.value)
    }
    render() {
        const {userId} = this.props
        return (
            <select onChange={this.handleClick.bind(this)} value={userId}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        )
    }
}
class Posts extends Component {
    constructor(props) {
        super(props)
        this.handleSelect = this.handleSelect.bind(this)
    }
    loadData(userId) {
        const {dispatch, posts} = this.props
        if (posts[userId]) {
            return
        }
        dispatch(loadPostsRequest(userId))

        fetch(`/api/post${userId}.json`)
            .then(data => data.json())
            .then(
            response => dispatch(loadPostsSuccess(userId, response)),
            error => dispatch(loadPostsFailure(userId, error)))
    }
    componentDidMount() {
        this.loadData(this.props.userId)
    }
    componentWillReceiveProps(nextProps) {
        console.log('props:', nextProps)
        if (nextProps.userId !== this.props.userId) {
            this.loadData(nextProps.userId)
        }
    }
    handleSelect(userId) {
        const {dispatch} = this.props
        dispatch(selectPost(userId))
    }
    render() {
        const {isLoading, userId, posts} = this.props
        const select = <Select userId={userId} handleSelect={this.handleSelect} />
        if (this.props.isLoading) {
            return (
                <div>
                    {select}
                    <p>Loading ...</p>
                </div>
            )
        }
        const postList = posts.map(post =>
            <Post post={post} key={post.id} />
        )
        return (
            <div>
                {select}
                {postList}
            </div>
        )
    }
}
export default connect(state => ({
    posts: state.posts,
    isLoading: state.isLoading,
    userId:state.userId
}))(Posts)