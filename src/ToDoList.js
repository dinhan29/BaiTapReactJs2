import React from 'react';
import TaskList from './TaskList.js'
import DeleteTask from './DeleteTask.js'
import EditTask from './EditTask.js'

class TodoList extends React.Component {
	handleDelete = () => {
        this.props.deleteTask(this.props.name)
    }
    handleE = () => {
        this.props.eTask(this.props.name)
    }
    handleEdit = () => {
    	this.props.openEditForm()
    	
    }
    
    
    render() {
        return (
        	
        	<tr>
	            <td>{this.props.name}</td>
	            <td>
	                <button type="button" className="btn btn-outline-primary" onClick={this.handleEdit}><i className="far fa-edit"></i>Edit</button>
	            </td>
	            <td>
	                <button type="button" className="btn btn-outline-primary" onClick={this.handleDelete}><i className="fa fa-trash"></i>Delete</button>
	            </td>
                <td>
                    <button type="button" className="btn btn-outline-primary" onClick={this.handleE}><i className="fa fa-trash"></i>E</button>
                </td>
        	</tr>


            
		);

    }
}

export default TodoList;