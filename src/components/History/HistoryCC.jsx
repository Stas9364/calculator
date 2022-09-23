import {StyledHistory, StyledLine, StyledText} from "./styled";
import React from "react";
import PropTypes from "prop-types";

export class HistoryCC extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		const {theme, operation, clearOperationListHandler} = this.props;

		return (
			<StyledHistory theme={theme}>
				<StyledText theme={theme}>History</StyledText>
				<div><button onClick={clearOperationListHandler}>Clear</button></div>
				<StyledLine theme={theme}/>
				{operation.map((el, i) => {
					return (
						<StyledText theme={theme} key={i}>{el}</StyledText>
					)
				})}
			</StyledHistory>

		)
	}
}

HistoryCC.propTypes = {
	theme: PropTypes.string,
	operation: PropTypes.array,
	clearOperationListHandler: PropTypes.func

}
