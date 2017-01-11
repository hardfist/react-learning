import React, { Component } from 'react'
import classnames from 'classnames'
import data from './data.json'
import './style.css'
import _ from 'lodash'
export class SearchInput extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event) {
        this.props.handleInput(event.target.value)
        console.log(event.target.value)
    }
    render() {
        return (
            <input type="text"
                value={this.props.query}
                onChange={this.handleClick}
                placeholder="Search..." />
        )
    }
}
class StockOnly extends Component {
    constructor(props) {
        super(props)
        this.handleCheck = this.handleCheck.bind(this)
    }
    handleCheck(event) {
        this.props.handleCheck(event.target.checked)
    }
    render() {
        return (
            <label>
                <input type="checkbox"
                    checked={this.props.stockOnly}
                    onChange={this.handleCheck}
                    />
                Only show products in stock
            </label>

        )
    }
}
export class SearchCategory extends Component {
    constructor(props) {
        super(props)
    }

    getList() {
        const {stockOnly, query, category} = this.props
        let groups = _.groupBy(category, 'category')
        let result = []
        let uuid = 0
        for (let key in groups) {
            let list = groups[key]
            let items = list.filter((item) => {
                if (item.name.indexOf(query) == -1 || (stockOnly && item.stocked)) {
                    return false
                } else {
                    return true
                }
            }).map((item, idx) => {
                const classes = { active: item.stocked }
                const classname = classnames(classes)
                return (
                    <tr key={uuid++} className={classname}>
                        <th>{item.name}</th>
                        <th>{item.price}</th>
                    </tr>
                )
            })
            let categoryRow = (<tr key={uuid++}>{key}</tr>)
            result.push(categoryRow)
            result.push(...items)
        }
        console.log('result:',result)
        return result
        
    }
    render() {
        const {query, category} = this.props
        return (
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.getList()
                    }
                </tbody>
            </table>
        )
    }
}

export default class SearchBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            stockOnly: false,
            category: []
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
    }
    componentDidMount() {
        fetch('/api/data.json').then(() => {
            return data
        }, err => {
            return data
        }).then(data => {
            this.setState({
                category: data
            })
        })
    }
    handleInput(value) {
        this.setState({
            query: value
        })
    }
    handleCheck(value) {
        console.log('handlCheck:', value)
        this.setState({
            stockOnly: value
        })
    }
    render() {
        console.log('state:', this.state)
        return (
            <div>
                <SearchInput handleInput={this.handleInput} query={this.state.query} />
                <StockOnly handleCheck={this.handleCheck} stockOnly={this.state.stockOnly} />
                <SearchCategory
                    stockOnly={this.state.stockOnly}
                    query={this.state.query}
                    category={this.state.category}
                    />
            </div>
        )
    }
}