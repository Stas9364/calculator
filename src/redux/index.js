import {themesSelector} from "./selectors";
import {themeSelector} from "./selectors";
import {operationSelector} from "./selectors";
import {changeTheme} from "./reducers/settingsReducer";
import {addOperation} from "./reducers/historyReducer";
import {clearOperationList} from "./reducers/historyReducer";
import {isHistoryOpen} from "./reducers/historyReducer";

export {
	themesSelector,
	themeSelector,
	operationSelector,
	changeTheme,
	isHistoryOpen,
	clearOperationList,
	addOperation
};

