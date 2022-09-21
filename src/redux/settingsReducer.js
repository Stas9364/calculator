const SETTINGS = {
	CHANGE_THEME: "CHANGE_THEME"
}

const initState = {
	themes: ['Light', 'Dark'],
	selectedTheme: 'Light'
};

export const settingsReducer = (state = initState, action) => {
	switch (action.type) {

		case SETTINGS.CHANGE_THEME:
			return {...state, selectedTheme: action.theme}

		default:
			return state;
	}
}

export const changeTheme = (theme) => ({type: SETTINGS.CHANGE_THEME, theme});
