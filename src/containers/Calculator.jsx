import React, {useState} from 'react';
import {Display} from "../components/Display";
import {History} from "../components/History";
import {Keypad} from "../components/Keypad";
import styled from "styled-components";

const StyledCalculator = styled.div`
	width: 60%;
	margin: 0 auto;
	display: grid;
	height: 60vh;
  grid-template-columns: 4fr 1fr;
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
`

export const Calculator = () => {
const [val, setVal] = useState('0');

	const onClickHandler = (el) => {
		try {
			if (el.match(/[.\-+/*]/) && val[val.length-1].match(/[.\-+/*]/) && val.match(/[.\-+/*]/)) {
				return
			}

			if (val === '0' && el === '.') {
				setVal(val + el);
			}else if (val === '0') {
				setVal(el);
			}else {
				setVal(val + el);
			}

			if (el === '=') {
				setVal(eval(val).toString());
			}

			if (el === 'C') {
				setVal('0');
			}

			if (el === 'CE') {
				let res = val.slice(0, val.length - 1);
				if (!res) {
					setVal('0');
				}else {
					setVal(res);
				}
			}
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<StyledCalculator>
			<Container>
				<Display val={val}/>
				<Keypad onClickHandler={onClickHandler} />
			</Container>

			<History/>
		</StyledCalculator>
	);
};

