import {themesSelector} from "./selectors";
import {themeSelector} from "./selectors";
import {operationSelector} from "./selectors";
import {changeTheme} from "./settingsReducer";
import {addOperation} from "./historyReducer";
import {clearOperationList} from "./historyReducer";
import {isHistoryOpen} from "./historyReducer";

export {
	themesSelector,
	themeSelector,
	operationSelector,
	changeTheme,
	isHistoryOpen,
	clearOperationList,
	addOperation
};

