import React from 'react';
import {connect} from 'react-redux';
import Task from '../task/';
import '../../App.css';

class TaskList extends React.Component{
	render(){
		return(
			<ul className="theList">
			<span className="scrollingList">
					{this.props.tasks.map((task,index) => 
						<Task key={index} id={index} task={task}/>)}
			</span>
			</ul>
			
			)
	}
}

function mapStateToProps(state){
	return{
		tasks:state.tasks
	};
}

export default connect(mapStateToProps)(TaskList);