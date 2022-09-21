
const HISTORY = {
	ADD_OPERATION: "ADD_OPERATION",
	CLEAR_OPERATION_LIST: "CLEAR_OPERATION_LIST",
	IS_HISTORY_OPEN: "IS_HISTORY_OPEN"
}

const initState = {
	isHistoryOpen: true,
	operationsList: []
}

export const historyReducer = (state = initState, action) => {
	switch (action.type) {
		case HISTORY.ADD_OPERATION:
			return {...state, operationsList: [action.operation, ...state.operationsList]};

		case HISTORY.CLEAR_OPERATION_LIST:
			return {...state, operationsList: []};

		case HISTORY.IS_HISTORY_OPEN:
			return {...state, isHistoryOpen: action.isOpen};

		default:
		return state;
	}
}

export const addOperation = (operation) => ({type: HISTORY.ADD_OPERATION, operation});
export const clearOperationList = () => ({type: HISTORY.CLEAR_OPERATION_LIST});
export const isHistoryOpen = (isOpen) => ({type: HISTORY.IS_HISTORY_OPEN, isOpen});
