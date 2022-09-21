import React from 'react';
import {History} from "./History";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {isHistoryOpen} from "../redux/historyReducer";
import {arrowLeft, arrowLeftWhite, arrowRight, arrowRightWhite} from "../assets";
import {isOpenSelector, themeSelector} from "../redux/selectors";

const StyledControlPanel = styled.div`
  width: 100%;
  display: flex;
`

const StyledIMG = styled.img`
  width: 25px;
  height: 25px;
  margin-top: 4px;
`

export const ControlPanel = () => {
	const dispatch = useDispatch();

	const isOpen = useSelector(isOpenSelector);
	const color = useSelector(themeSelector);

	const isOpenHandler = () => dispatch(isHistoryOpen(!isOpen))

	return (
		<StyledControlPanel>
			<StyledIMG
				src={color === 'Light'
					? (isOpen ? arrowLeft : arrowRight)
					: (isOpen ? arrowLeftWhite : arrowRightWhite)
				}
				alt="arrow"
				onClick={isOpenHandler}
			/>
			{isOpen && <History/>}
		</StyledControlPanel>
	);
};

