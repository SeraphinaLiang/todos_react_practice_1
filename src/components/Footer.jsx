import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import {Form} from "react-bootstrap";
import Col from 'react-bootstrap/Col'

export default class Footer extends Component {

    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }

    handleClearAllDone = () => {
        this.props.clearAllDone()
    }


    render() {
        const {todos} = this.props
        const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
        const total = todos.length

        return (
            <div style={{marginTop: 10}}>
                <InputGroup className="mb-3">
                    <InputGroup.Checkbox
                        checked={doneCount === total && total !== 0}
                        onChange={this.handleCheckAll}
                    />
                    <InputGroup.Text>Check all Tasks</InputGroup.Text>
                    <Form.Label column sm="2">
                        Finished {doneCount} / All {total}
                    </Form.Label>
                    <Col>
                        <Button onClick={this.handleClearAllDone}>
                            Delete Finished Tasks
                        </Button>
                    </Col>
                </InputGroup>
            </div>
        )
    }
}
