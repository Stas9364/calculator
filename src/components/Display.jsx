import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledDisplay = styled.div`
  height: 100px;
	background-color: azure;
	display: flex;
	justify-content: end;
	border: 1px solid;
	margin: 5px;
`

export const Display = ({val}) => {
	return (
		<StyledDisplay>
			<div>{val}</div>
		</StyledDisplay>
	);
};

Display.propsTypes = {
	val: PropTypes.string
}
