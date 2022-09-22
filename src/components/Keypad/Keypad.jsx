import React from 'react';
import PropTypes from "prop-types"
import {useSelector} from "react-redux";
import {StyledKeypad} from "./styled";
import {themeSelector} from "../../redux";
import {symbols} from "../../constants";
import {Button} from "../Button";



export const Keypad = ({onClickHandler}) => {
	const theme = useSelector(themeSelector);

	return (
		<StyledKeypad>
			{symbols.map((el, i) => {
				return (
					<Button theme={theme} key={i} onClick={() => onClickHandler(el)}>
						{el}
					</Button>
				)
			})}
		</StyledKeypad>
	);
};


Keypad.propTypes = {
	onClickHandler: PropTypes.func
}
