import React from 'react';
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {StyledDisplay, StyledH1} from "./styled";
import {themeSelector} from "../../redux";


export const Display = ({val}) => {
	const theme = useSelector(themeSelector);

	return (
		<StyledDisplay theme={theme}>
			<StyledH1 theme={theme}>{val}</StyledH1>
		</StyledDisplay>
	);
};

Display.propsTypes = {
	val: PropTypes.string
}
