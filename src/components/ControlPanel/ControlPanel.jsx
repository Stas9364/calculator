import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {arrowLeft, arrowLeftWhite, arrowRight, arrowRightWhite} from "../../assets";
import {StyledControlPanel, StyledIMG} from "./styled";
import {isOpenSelector, themeSelector} from "../../redux/selectors";
import {isHistoryOpen} from "../../redux";
import {History} from "../History";


export const ControlPanel = () => {
	const dispatch = useDispatch();

	const isOpen = useSelector(isOpenSelector);
	const theme = useSelector(themeSelector);

	const isOpenHandler = () => dispatch(isHistoryOpen(!isOpen))

	return (
		<StyledControlPanel>
			<StyledIMG
				src={theme === 'Light'
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

