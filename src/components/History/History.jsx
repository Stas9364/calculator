import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {StyledHistory, StyledLine, StyledText} from "./styled";
import {clearOperationList, operationSelector, themeSelector} from "../../redux";


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

