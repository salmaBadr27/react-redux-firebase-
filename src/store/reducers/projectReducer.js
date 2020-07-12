const initState = {
	projects: [],
	Err: "",
};

const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case "ADD_PROJECT":
			// console.log("done", action.projects);
			return state;

		case "CREATE_PROJECT_ERROR":
			// console.log("ERR", action.error);
			return state;
		case "DELETE_PROJECT_SUCCESS":
			// console.log("delsucceded", action.projects);
			return {
				...state,
				projects: action.projects,
			};
		case "DELETE_PROJECT_ERROR":
			return {
				...state,
				Err: action.error,
			};
		case "SEARCH_PROJECT_SUCCESS":
			console.log("search", action.projects);
			return {
				...state,
				projects: action.projects,
			};
		case "SEARCH_PROJECT_FAIL":
			return {
				...state,
				Err: action.msg,
			};
		default:
			return state;
	}
};

export default projectReducer;
