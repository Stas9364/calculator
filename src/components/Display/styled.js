import styled from "styled-components";

export const StyledDisplay = styled.div`
  height: 100px;
  background-color: ${props => props.theme === 'Light' ? '#e5e5e5' : '#444445'};
  display: flex;
  justify-content: end;
  margin: 5px;
  border-bottom: ${props => props.theme === 'Light' ? '1px solid black' : '1px solid white'};
`

export const StyledH1 = styled.h1`
	margin-right: 10px;
	color: ${props => props.theme === 'Light' ? 'black' : 'white'};
`
