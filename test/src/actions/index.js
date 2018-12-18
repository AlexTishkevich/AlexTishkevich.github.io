export const addTask=(task)=>{
	return{
		type:'ADD_TASK',
		payload:task 
		};

},
deleteTask = (index) =>{
	
	return{
		type:'DELETE_TASK',
		payload:index
		};
};

export default {addTask,deleteTask};