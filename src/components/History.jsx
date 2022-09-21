import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {clearOperationList} from "../redux/historyReducer";
import {operationSelector, themeSelector} from "../redux";

const StyledHistory = styled.div`
  background-color: ${props => props.theme === 'Light' ? '#e5e5e5' : '#444445'};
  margin-top: 5px;
  overflow-y: auto;
  width: 100%;
  padding: 10px;
`

const StyledLine = styled.div`
	width: 100%;
	height: 1px;
	background-color: ${props => props.theme === 'Light' ? 'black' : 'white'};
	margin-top: 31px;
`

const StyledText = styled.div`
	color: ${props => props.theme === 'Light' ? 'black' : 'white'};
	text-align: center;
`

export const History = () => {
	const dispatch = useDispatch();

	const theme = useSelector(themeSelector);
	const operation = useSelector(operationSelector);

	const clearHandler = () => dispatch(clearOperationList());

	return (
		<StyledHistory theme={theme}>
			<StyledText theme={theme}>History</StyledText>
			<div><button onClick={clearHandler}>Clear</button></div>
			<StyledLine theme={theme}/>
			{operation.map((el, i) => {
				return (
					<StyledText theme={theme} key={i}>{el}</StyledText>
				)
			})}
		</StyledHistory>
	);
};

