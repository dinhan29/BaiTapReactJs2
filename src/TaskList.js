import React from 'react';
import ToDoList from './ToDoList';
import AddTask from './AddTask';
import EditTask from './EditTask'

class TaskList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: ['Task 1', 'Task 2'],
            showAddForm: false,
            showEditForm: false,
            nameEditTasks : ""

        }
    }
    deleteTask = (name) => {
        const filteredTask = this.state.tasks.filter(i => {
            return i !== name
        })
        console.log(filteredTask.index)
        this.setState({
            tasks: filteredTask
        })
    }
    eTask = (name) => {
        console.log(name)
    }

    setStatus = () => {
        this.setState({
            showAddForm: true
        })
    }
    closeForm = () => {
        this.setState({
            showAddForm: false,
            showEditForm: false
        })
    }
    addTask = (name) => {
        this.state.tasks.push(name)
        this.forceUpdate()
    }
    ///
    openEditForm = () => {
        this.setState({
            showEditForm : true
        })
    }
    
    
    render() {
        if (this.state.showAddForm === true) {
            return (
                <AddTask addTask={this.addTask} closeForm={this.closeForm} />
            )
        } else if (this.state.showEditForm === true) {
            return (
                <EditTask nameTask={this.state.nameEditTasks} />

            )
        }

         else {
            return (
                <div className="container">
                    <br />
                    <br />
                    <button type="button" className="btn btn-outline-primary" onClick={this.setStatus} >Add Task</button>
                    <h2>List Task</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name of task</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tasks.map(function (name, index) {
                                    return <ToDoList name={name}
                                        openEditForm={this.openEditForm}
                                        deleteTask={this.deleteTask}
                                    />
                                }.bind(this))
                            }
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}

export default TaskList;