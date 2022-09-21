export const themesSelector = (state) => state.settings.themes;
export const themeSelector = (state) => state.settings.selectedTheme;
export const operationSelector = (state) => state.history.operationsList;
export const isOpenSelector = (state) => state.history.isHistoryOpen;
