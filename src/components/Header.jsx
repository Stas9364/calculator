import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
	justify-content: space-between;
	height: 10vh;
	background-color: antiquewhite;
`

export const Header = () => {
	return (
		<StyledHeader>
			<div>
				Calculator App
			</div>
			<div>
				<NavLink to={'/'}>Home</NavLink>
				<NavLink to={'/settings'}>Settings</NavLink>
			</div>
		</StyledHeader>
	);
};

