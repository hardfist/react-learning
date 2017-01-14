import React,{Component} from 'react'

const Counter = ({value,onIncrement,onDecrement,onIncrementAsync}) =>(
    <div>
        <button onClick={onIncrement}>
            Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
            Decrement
        </button>
        {' '}
        <button onClick={onIncrementAsync}>
            Increment after 1 secs
        </button>
        <hr/>
        <div>
            Clicked: {value} times
        </div>
    </div>
)
export default Counter;