import {changeTheme, initState, settingsReducer} from "./settingsReducer";

test('should change theme from Light to Dark', () => {
	const endState = settingsReducer(initState, changeTheme('Dark'));

	expect(endState.selectedTheme).toBe('Dark');
});
