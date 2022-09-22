import {StyledDisplay, StyledH1} from "./styled";
import React from "react";

export class DisplayCC extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {theme, val} = this.props;

		return (
			<StyledDisplay theme={theme}>
				<StyledH1 theme={theme}>{val}</StyledH1>
			</StyledDisplay>

		)
	}
}
