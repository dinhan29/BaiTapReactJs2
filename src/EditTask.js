import React, { Component } from 'react';
import ToDoList from './ToDoList';
import AddTask from './AddTask';



class EditTask extends Component {
	constructor(props) {
        super(props)
        this.state = {
            tasks: this.props.nameTask


        }
    }
	render() {
		return (
			<div className="container">
            	<h2>Edit task</h2>
	            <input type="text" name="name" value = {this.state.tasks}/>
            </div>
		);
	}

}

export default EditTask;
