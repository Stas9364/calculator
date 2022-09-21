import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunk from 'redux-thunk';
import {historyReducer} from "./historyReducer";
import {settingsReducer} from "./settingsReducer";


const rootReducer = combineReducers({
	history: historyReducer,
	settings: settingsReducer
});

export const store = legacy_createStore(
	rootReducer,
	applyMiddleware(thunk),
);
