import {StyledKeypad} from "./styled";
import React from "react";
import PropTypes from "prop-types";
import {symbols} from "../../constants";
import {ButtonCC} from "../Button";

export class KeypadCC extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		const {theme, onClickHandler} = this.props;
		return (
			<StyledKeypad>
				{symbols.map((el, i) => {
					return (
						<ButtonCC id={el.id} theme={theme} key={i} onClick={() => onClickHandler(el.sign)}>
							{el.sign}
						</ButtonCC>
					)
				})}
			</StyledKeypad>

		)
	}
}

KeypadCC.propTypes = {
	onClickHandler: PropTypes.func,
	theme: PropTypes.string
}
