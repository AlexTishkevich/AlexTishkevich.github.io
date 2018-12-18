import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {addTask} from '../../actions/';


 class TaskBar extends React.Component{
	render(){
		return(
			<div className="Task1">
        		
          			<input ref="task"
            			type="text" size="30" placeholder="Enter text"/>
            		<button className="Submit" onClick={()=>this.props.addTask(this.refs.task.value)}> Submit </button>
                <h1>Yours tasks:</h1>
        </div>
			);
	}
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({addTask},dispatch);
}

export default connect(null,mapDispatchToProps)(TaskBar);