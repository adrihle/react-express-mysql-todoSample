import React, { Component } from "react";

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: {
                task: '',
                status: ''
            }
        }
    }

    addTask = _ => {
        const { tasks } = this.state
        fetch(`http://localhost:4000/users/add?task=${tasks.task}&status=${tasks.status}`)
        .catch( err => console.log(err))
    }

    render() {
        const { tasks } = this.state
        return (
            <div className="Form container mt-3">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            Define Task!
                        </span>
                    </div>
                    <input
                        type="text"
                        value={tasks.task}
                        onChange={e => this.setState({ tasks: { ...tasks, task: e.target.value } })}
                        className="form-control"
                        placeholder="Task"
                        aria-label="Task"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            Define Status!
                        </span>
                    </div>
                    <input
                        type="text"
                        value={tasks.status}
                        onChange={e => this.setState({ tasks: { ...tasks, status: e.target.value } })}
                        className="form-control"
                        placeholder="Status"
                        aria-label="Status"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <button 
                type="Submit" 
                className="btn btn-outline-success d-flex mr-auto"
                onClick={this.addTask}
                >
                Add
                </button>
            </div>
        );
    }
}

export default Form;
