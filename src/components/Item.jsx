import React, {Component} from 'react'
import {Form} from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from 'react-bootstrap/ListGroup'

export default class Item extends Component {

    state = {mouse: false}

    // 调用 this.handleMouse(true)，返回一个函数
    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }

    // 调用 this.handleCheck(id) ，返回一个函数
    // 柯里化函数，先接收id，再接收event
    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }

    //调用 () => this.handleDelete(id)，返回 handleDelete 函数本身
    handleDelete = (id) => {
        if (window.confirm('are you sure ??')) {
            this.props.deleteTodo(id)
        }
    }

    render() {
        const {id, name, done} = this.props
        const {mouse} = this.state
        return (
            <ListGroup.Item
                style={{backgroundColor: mouse ? '#ddd' : 'white'}}
                onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}
            >
                <InputGroup className="mb-3">
                    <Form.Check type="checkbox"
                                label={name}
                                checked={done}
                                onChange={this.handleCheck(id)}
                    />
                    <Button variant="warning" size="sm"
                            style={{marginLeft: 100, display: mouse ? 'block' : 'none'}}
                            onClick={() => this.handleDelete(id)}
                    >Delete
                    </Button>
                </InputGroup>
            </ListGroup.Item>
        )
    }
}
