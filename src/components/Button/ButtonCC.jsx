import {StyledButton} from "./styled";
import React from "react";

export class ButtonCC extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<StyledButton {...this.props}/>
		)
	}
}
