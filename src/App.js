import './App.css';
import React, {Component} from "react";
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import Card from "react-bootstrap/Card";

export default class App extends Component {

    state = {
        todos: [
            {id: '001', name: 'eat', done: true},
            {id: '002', name: 'play', done: false},
            {id: '003', name: 'write', done: false},
            {id: '004', name: 'shopping', done: true}
        ]
    }

    addTodo = (Obj) => {
        const {todos} = this.state
        const newTodos = [Obj, ...todos]
        this.setState({todos: newTodos})
    }

    updateTodo = (id, done) => {
        const {todos} = this.state
        const newTodos = todos.map((obj) => {
            if (obj.id === id) return {...obj, done}
            else return obj
        })
        this.setState({todos: newTodos})
    }

    deleteTodo = (id) => {
        const {todos} = this.state
        const newTodos = todos.filter((obj) => {
            return obj.id !== id
        })
        this.setState({todos: newTodos})
    }

    checkAllTodo = (done) => {
        const {todos} = this.state
        const newTodos = todos.map((obj) => {
            return {...obj, done}
        })
        this.setState({todos: newTodos})
    }

    clearAllDone = () => {
        const {todos} = this.state
        const newTodos = todos.filter((obj) => {
            return !obj.done
        })
        this.setState({todos: newTodos})
    }

    render() {
        const {todos} = this.state
        return (
            <div className="App">
                <Card>
                    <Card.Body>
                        <Header addTodo={this.addTodo}/>
                        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                        <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}


