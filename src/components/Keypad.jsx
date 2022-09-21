import React from 'react';
import {symbols} from "../constants";
import styled from "styled-components";
import {Button} from "./Button";
import PropTypes from "prop-types"
import {useSelector} from "react-redux";
import {themeSelector} from "../redux";

const StyledKeypad = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  height: 100%;
  margin: 5px;
`


export const Keypad = ({onClickHandler}) => {
	const color = useSelector(themeSelector);

	return (
		<StyledKeypad>
			{symbols.map((el, i) => {
				return (
					<Button theme={color} key={i} onClick={() => onClickHandler(el)}>
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
