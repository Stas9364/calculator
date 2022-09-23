import {connect} from "react-redux";
import {StyledContainer, StyledCalculator} from "./styledComponents";
import React from "react";
import {ControlPanelCC, DisplayCC, ErrorBoundary, KeypadCC} from "../../components";
import {
	addOperation,
	clearOperationList,
	isHistoryOpen,
	operationSelector,
	themeSelector,
	themesSelector
} from "../../redux";
import {isOpenSelector} from "../../redux/selectors";

export class CalculatorCC extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '0'
		}
	}

	onClickHandler = (el) => {
		const expressions = /[.\-+/*]/
		const lastNum = this.state.value[this.state.value.length - 1]
		try {
			if (expressions.test(lastNum) && expressions.test(el)) {

				this.setState({value: this.state.value.substring(0, this.state.value.length - 1) + el});
				return;
			}

			if (this.state.value === '0' && el === '.') {
				this.setState({value: this.state.value +el});
			} else if (this.state.value === '0') {

				this.setState({value: el});
			} else {

				this.setState({value: this.state.value +el});
			}

			this.result(el);

		} catch (e) {
			console.log(e)
			alert('Invalid expression');
			this.result(el, e);
		}
	}

	result(el, error = null) {
		switch (el) {
			case '=':
				if (error) {
					this.setState({value: ''});
				} else {
					let result = eval(this.state.value).toString();

					if (result.includes('.') && result.split('.')[1].length > 2) {
						this.setState(Number(result).toFixed(3));
					} else {
						this.setState({value: result});
					}

					this.props.addOperation(this.state.value);
				}
				break;

			case 'C':
				this.setState({value: '0'});

				break;

			case 'CE':
				let res = this.state.value.slice(0, this.state.value.length - 1);
				if (!res) {
					this.setState({value: '0'});
				} else {
					this.setState({value: res});
				}
		}
	}

	isHistoryOpenHandler = () => this.props.isHistoryOpen(!this.props.isOpen);

	clearOperationListHandler = () => this.props.clearOperationList();

	render() {
		return (
			<ErrorBoundary>
				<StyledCalculator>
					<StyledContainer>
						<DisplayCC
							val={this.state.value}
							theme={this.props.theme}
						/>
						<KeypadCC
							onClickHandler={this.onClickHandler}
							theme={this.props.theme}
						/>
					</StyledContainer>

					<ControlPanelCC
						theme={this.props.theme}
						isOpen={this.props.isOpen}
						operation={this.props.operation}
						isHistoryOpenHandler={this.isHistoryOpenHandler}
						clearOperationListHandler={this.clearOperationListHandler}
					/>
				</StyledCalculator>
			</ErrorBoundary>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		theme: themeSelector(state),
		themes: themesSelector(state),
		operation: operationSelector(state),
		isOpen: isOpenSelector(state)
	}
}

export default connect(mapStateToProps,
	{addOperation, clearOperationList, isHistoryOpen}
)(CalculatorCC);
