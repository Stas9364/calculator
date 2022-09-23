import {addOperation, clearOperationList, historyReducer, isHistoryOpen} from "./historyReducer";

const testState = {
	isHistoryOpen: true,
	operationsList: []
}

test('should add operation to state and clear history', () => {
	let endState = historyReducer(testState, addOperation('25+5'));
	expect(endState.operationsList.length).toBe(1);

	endState = historyReducer(testState, clearOperationList());
	expect(endState.operationsList.length).toBe(0);
});

test('should close history panel', () => {
	const endState = historyReducer(testState, isHistoryOpen(false));

	expect(endState.isHistoryOpen).toBeFalsy();
});
