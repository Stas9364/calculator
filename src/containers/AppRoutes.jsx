import React from 'react';
import {Route, Routes} from "react-router-dom";
import {PATH} from "../constants";
import {Settings} from "../screens";
import {CalculatorFC} from "./Calculator/CalculatorFC";
import {Calc, CalculatorCC} from "./Calculator/CalculatorCC";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path={PATH.home} element={<CalculatorFC/>}/>
			<Route path={PATH.settings} element={<Settings/>}/>
		</Routes>
	);
};

