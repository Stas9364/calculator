import React, {useState} from 'react';
import {Display} from "../../components";
import {Keypad} from "../../components/Keypad";
import {ControlPanel} from "../../components";
import {useDispatch} from "react-redux";
import {addOperation} from "../../redux/historyReducer";
import {Container, StyledCalculator} from "./styledComponents";


export const CalculatorFC = () => {
	const dispatch = useDispatch();

	const [value, setValue] = useState('0');

	const onClickHandler = (el) => {
		const expressions = /[.\-+/*]/
		const lastNum = value[value.length - 1]
		try {

			if (expressions.test(lastNum) && expressions.test(el)) {
				setValue(value.substring(0, value.length - 1) + el);
				return;
			}

			if (value === '0' && el === '.') {
				setValue(value + el);
			} else if (value === '0') {
				setValue(el);
			} else {
				setValue(value + el);
			}

			result(el);

		} catch (e) {
			console.log(e)
		}
	}

	function result(el) {
		switch (el) {
			case '=':
				dispatch(addOperation(value));
				let result = eval(value).toString();
				if (result.includes('.') && result.split('.')[1].length > 2) {
					setValue(Number(result).toFixed(3));
				} else {
					setValue(result);
				}
				break;

			case 'C':
				setValue('0');
				break;

			case 'CE':
				let res = value.slice(0, value.length - 1);
				if (!res) {
					setValue('0');
				} else {
					setValue(res);
				}
		}
	}

	return (
		<StyledCalculator>
			<Container>
				<Display val={value}/>
				<Keypad onClickHandler={onClickHandler}/>
			</Container>

			<ControlPanel/>
		</StyledCalculator>
	);
};
