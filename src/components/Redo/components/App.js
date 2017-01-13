import React,{Component} from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'
import UndoRedo from './UndoRedo'
class App extends Component{
    render(){
        return (
            <div>
                <AddTodo/>
                <TodoList/>
                <Footer/>
                <UndoRedo/>
            </div>
        )
    }
}
export default App 