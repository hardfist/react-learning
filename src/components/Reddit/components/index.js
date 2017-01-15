import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from '../reducers/actions'
import Posts from './Posts'
import Picker from './Picker'
class App extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }
    componentDidMount() {
        const {dispatch, selectedSubreddit} = this.props
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
            const {dispatch, selectedSubreddit} = nextProps
            dispatch(fetchPostsIfNeeded(selectedSubreddit))
        }
    }
    handleChange(nextSubreddit) {
        console.log('subreddit:', nextSubreddit)
        this.props.dispatch(selectSubreddit(nextSubreddit))
    }
    handleRefreshClick(e) {
        e.preventDefault()
        const {dispatch, selectedSubreddit} = this.props
        dispatch(invalidateSubreddit(selectedSubreddit))
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }
    render() {
        const {selectedSubreddit, posts, isFetching, lastUpdated} = this.props
        return (
            <div>
                <Picker value={selectedSubreddit}
                    onChange={this.handleChange}
                    options={['reactjs', 'frontend','angular','vue']} />
                <p>
                    {
                        lastUpdated &&
                        <span>
                            Last updated at {new Date(lastUpdated).toLocaleString()}
                            {' '}
                        </span>
                    }
                    {
                        !isFetching &&
                        <a href="#"
                            onClick={this.handleRefreshClick}>
                            Refresh
                        </a>
                    }
                </p>
                {
                    isFetching && posts.length === 0 && 
                    <h2>Loading...</h2>
                }
                {
                    !isFetching && posts.length === 0 && 
                    <h2>Empty</h2>
                }
                {
                    posts.length > 0 && 
                    <div style={{opacity: isFetching ? 0.5 : 1}}>
                        <Posts posts={posts}/>
                    </div>
                }
            </div>
        )
    }
}
function mapStateToProps(state) {
    const {selectedSubreddit, postsBySubreddit} = state
    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: []
    }
    return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated
    }
}
export default connect(mapStateToProps)(App)