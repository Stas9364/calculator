import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeTheme} from "../redux/settingsReducer";
import {themesSelector} from "../redux";

export const Settings = () => {
	const dispatch = useDispatch();

	const themes = useSelector(themesSelector);

	const onChangeTheme = (e) => dispatch(changeTheme(e.target.value));

	return (
		<select onChange={onChangeTheme}>
			{themes.map((c, i) => {
				return (
					<option key={i} value={c}>{c} Theme</option>
				)
			})}
		</select>
	);
};

