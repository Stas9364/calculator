import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {CalculatorCC, CalculatorFC} from "../containers";
import {PATH} from "../constants";


export const AppRoutes = () => {
	return (
		<Routes>
			<Route path={PATH.FC} element={<CalculatorFC/>}/>
			<Route path={PATH.CC} element={<CalculatorCC/>}/>
			<Route path={'/*'} element={<Navigate to={'/'}/>}/>
		</Routes>
	);
};

