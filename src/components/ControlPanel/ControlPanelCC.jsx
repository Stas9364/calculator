import {StyledControlPanel, StyledIMG} from "./styled";
import React from "react";
import {arrowLeft, arrowLeftWhite, arrowRight, arrowRightWhite} from "../../assets";
import {HistoryCC} from "../History";
import PropTypes from "prop-types";

export class ControlPanelCC extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {theme, isOpen, isHistoryOpenHandler, operation, clearOperationListHandler} = this.props;
		return (
			<StyledControlPanel>
				<StyledIMG
					src={theme === 'Light'
						? (isOpen ? arrowLeft : arrowRight)
						: (isOpen ? arrowLeftWhite : arrowRightWhite)
					}
					alt="arrow"
					onClick={isHistoryOpenHandler}
				/>
				{isOpen && <HistoryCC
					theme={theme}
					operation={operation}
					clearOperationListHandler={clearOperationListHandler}
				/>}
			</StyledControlPanel>
		)
	}
}

ControlPanelCC.propTypes = {
	theme: PropTypes.string,
	isOpen: PropTypes.bool,
	isHistoryOpenHandler: PropTypes.func,
	operation: PropTypes.array,
	clearOperationListHandler: PropTypes.func
}
