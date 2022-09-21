import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
	body {
		background-color: ${props => props.theme === 'Light' ? '#f5f5f5' : '#444445'} ;
    box-sizing: border-box;
    margin: 0;
  }
`
