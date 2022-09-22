import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {changeTheme, themeSelector, themesSelector} from "../redux";

const StyledHeader = styled.div`
  display: flex;
	justify-content: space-between;
	height: 10vh;
	background-color: ${props => props.theme === 'Light' ? '#D4D4D4' : '#2B3030'};
`

const StyledText = styled.h1`
	color: ${props => props.theme === 'Light' ? '#2B3030' : '#D4D4D4'};
`

export const Header = () => {
	const dispatch = useDispatch();

	const themes = useSelector(themesSelector);
	const theme = useSelector(themeSelector);

	const onChangeTheme = (e) => dispatch(changeTheme(e.target.value));

	return (
		<StyledHeader theme={theme}>
			<StyledText theme={theme}>
				Calculator App
			</StyledText>
			<div>
				{/*<NavLink to={'/'}>Function</NavLink>*/}
				<NavLink to={'/cc'}>Class</NavLink>
				<div>
					<select onChange={onChangeTheme}>
						{themes.map((c, i) => <option key={i} value={c}>{c} Theme</option>)}
					</select>
				</div>
			</div>
		</StyledHeader>
	);
};
