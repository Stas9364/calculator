import React from 'react';
import {Route, Routes} from "react-router-dom";
import {PATH} from "../constants";
import {ControlPanel} from "../screens";
import {Calculator} from "./Calculator";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path={PATH.home} element={<Calculator/>}/>
			<Route path={PATH.settings} element={<ControlPanel/>}/>
		</Routes>
	);
};

