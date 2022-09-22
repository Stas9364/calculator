import styled from "styled-components";

export const StyledHistory = styled.div`
  background-color: ${props => props.theme === 'Light' ? '#e5e5e5' : '#444445'};
  margin-top: 5px;
  overflow-y: auto;
  width: 100%;
  padding: 10px;
`

export const StyledLine = styled.div`
	width: 100%;
	height: 1px;
	background-color: ${props => props.theme === 'Light' ? 'black' : 'white'};
	margin-top: 31px;
`

export const StyledText = styled.div`
	color: ${props => props.theme === 'Light' ? 'black' : 'white'};
	text-align: center;
`
