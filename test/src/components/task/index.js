import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteTask} from '../../actions/';
import '../../App.css';

class Task extends React.Component{
	render(){
		return(
			<li >
				{this.props.task}
				<button className="delete" onClick={()=>{this.props.deleteTask(this.props.id)}}> Delete </button>
			</li>
			)
	}
}

function mapDispatchToProps(dispatch ){
	return bindActionCreators({deleteTask},dispatch);
}

export default connect(()=>{return{};},mapDispatchToProps)(Task);