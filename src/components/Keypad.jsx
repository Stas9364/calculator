import React from 'react';
import {symbols} from "../constants";
import styled from "styled-components";
import {Button} from "./Button";
import PropTypes from "prop-types"

const StyledKeypad = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  height: 100%;
  border: 1px solid;
  margin: 5px;
`


export const Keypad = ({onClickHandler}) => {
	return (
		<StyledKeypad>
			{symbols.map((el, i) => {
				return (
					<Button key={i} onClick={() => onClickHandler(el)}>
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
