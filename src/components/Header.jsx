import React, {Component} from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'

export default class Header extends Component {

    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handleKeyUp = (event) => {
        const {keyCode, target} = event
        if (keyCode !== 13) return
        if (target.value.trim() === '') {
            alert("message can not be empty")
            return
        }
        const obj = {id: nanoid(), name: target.value, done: false}
        this.props.addTodo(obj)
        target.value = ''
    }

    render() {
        return (
            <InputGroup className="mb-3" onKeyUp={this.handleKeyUp}>
                <FormControl
                    placeholder="Add a new task, and press enter !"
                />
            </InputGroup>
        )
    }
}
