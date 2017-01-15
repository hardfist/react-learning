import React, { Component, PropTypes } from 'react'
import Preview from './Preview'

class PreviewList extends Component {
    static propTypes = {
        articleList: PropTypes.arrayOf(PropTypes.object),
        error: PropTypes.bool,
        loading: PropTypes.bool,
        loadArticles: PropTypes.func
    }
    componentDidMount() {
        console.log('loaded')
        this.props.loadArticles()
    }
    render() {
        const {loading, error, articleList} = this.props
        if (error) {
            return <p className="message">Oops,something is wrong.</p>
        }
        if (loading) {
            return <p className="message">Loading...</p>
        }
        return (
            <div className="posts">
                {
                    this.props.articleList.map(item => (
                        <Preview {...item} key={item.id} push={this.props.push}/>
                    ))
                }
            </div>
        )
    }
}
export default PreviewList