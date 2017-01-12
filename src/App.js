import React,{Component} from 'react'
import {connect} from 'react-redux'
import {addTodo,completeTodo} from './reducers/actions'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

class App extends Component{
  render(){
    const {dispatch,todos} = this.props
    return (
      <div>
        <AddTodo
          onAddClick = {
            text => dispatch(addTodo(text))
          }/>
        <TodoList 
          todos = {todos}
          onTodoClick = {index =>
            dispatch(completeTodo(index))}/>
      </div>
    )
  }
}

function select(state){
  return {
    todos : state.todos
  }
}
export default connect(select)(App)