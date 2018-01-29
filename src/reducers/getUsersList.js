
const userList = (state = [], action)=>{
	switch(action.type){
		case "USER_LIST":
			return {...state, userListResp: action.payload};
		case "USER_DETAILS":
			return {...state, userDetailsResp: action.payload};
		default:
			return state
	}
}

export default userList;
