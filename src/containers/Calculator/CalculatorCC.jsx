import {connect} from "react-redux";
import {addOperation, clearOperationList, isHistoryOpen} from "../../redux/historyReducer";
import {Container, StyledCalculator} from "./styledComponents";
import {ControlPanel, Display} from "../../components";
import {Keypad} from "../../components/Keypad";
import React from "react";

export class CalculatorCC extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '0'
		}
	}

	onClickHandler = (el) => {

		try {
			if (el.match(/[.\-+/*]/) && this.value[this.value.length - 1].match(/[.\-+/*]/)) {
				return;
			}

			if (this.value === '0' && el === '.') {
				this.setState({value: this.value + el});
			} else if (this.value === '0') {
				this.setState({value: el});
			} else {
				this.setState({value: this.value + el});
			}

			if (el === '=') {
				this.props.addOperation(this.value);

				let result = eval(this.value).toString();
				if (result.includes('.')) {
					this.setState(Number(result).toFixed(3));
				} else {
					this.setState({value: result});
				}
			}

			if (el === 'C') {
				this.setState({value: '0'});
			}

			if (el === 'CE') {
				let result = this.value.slice(0, this.value.length - 1);
				if (!result) {
					this.setState({value: '0'});
				} else {
					this.setState({value: result});
				}
			}
		} catch (e) {
			console.log(e)
		}
	}

	render() {

		return (
			<>
				<StyledCalculator>
					<Container>
						<Display val={this.value}/>
						<Keypad onClickHandler={this.onClickHandler}/>
					</Container>

					<ControlPanel/>
				</StyledCalculator>

			</>
		)
	}
}

const mapStateToProps = (state) => {
	return {}
}

export const Calc = connect(mapStateToProps,
	{addOperation, clearOperationList, isHistoryOpen}
)(CalculatorCC);
