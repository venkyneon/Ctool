import * as types from '../actions/actionTypes';
export default function (state = {}, action = null) {
	switch(action.type) {
		case types.MISC_USERLIST_REQUEST:
			return Object.assign({}, state, {});
		case types.MISC_USERLIST_RESPONSE:
			console.log("MISC_USERLIST_RESPONSE==",action.payload.data);
			return Object.assign({}, state, {userList:action.payload.data});
			case types.MISC_USERDETAILS_REQUEST:
				return Object.assign({}, state, {});
			case types.MISC_USERDETAILS_RESPONSE:
				console.log("MISC_USERDETAILS_RESPONSE==",action.payload);
				return Object.assign({}, state, {userDetails:action.payload});
				case types.MISC_UPDATE_USERDETAILS_REQUEST:
					return Object.assign({}, state, {});
				case types.MISC_UPDATE_USERDETAILS_RESPONSE:
					console.log("MISC_UPDATE_USERDETAILS_RESPONSE==",action.payload);
					return Object.assign({}, state, {userDetails:action.payload});

		default:
			return state;
	}
};