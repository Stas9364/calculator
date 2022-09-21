import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {themeSelector} from "../redux";

const StyledDisplay = styled.div`
  height: 100px;
  background-color: ${props => props.theme === 'Light' ? '#e5e5e5' : '#444445'};
  display: flex;
  justify-content: end;
  margin: 5px;
  border-bottom: ${props => props.theme === 'Light' ? '1px solid black' : '1px solid white'};
`

const StyledH1 = styled.h1`
	margin-right: 10px;
	color: ${props => props.theme === 'Light' ? 'black' : 'white'};
`

export const Display = ({val}) => {
	const color = useSelector(themeSelector);

	return (
		<StyledDisplay theme={color}>
			<StyledH1 theme={color}>{val}</StyledH1>
		</StyledDisplay>
	);
};

Display.propsTypes = {
	val: PropTypes.string
}
