import React, {Component} from 'react'
import {Form} from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from 'react-bootstrap/ListGroup'

export default class Item extends Component {

    state = {mouse: false}

    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }

    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }

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
