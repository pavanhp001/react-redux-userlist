
const userList = (state = [], action)=>{
	switch(action.type){
		case "USER_LIST":
			return {...state, userListResp: action.payload};
		default:
			return state
	}
}

export default userList;
