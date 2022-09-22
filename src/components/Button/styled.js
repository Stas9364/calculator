import styled from "styled-components";
export const StyledButton = styled.div`
  box-shadow: ${props => props.theme === 'Light' ? 'inset 0 1px 0 0 #ffffff' : 'inset 0 1px 0 0 #2d2d2e'};
  background: ${props => props.theme === 'Light' ? '#ededed' : '#2d2d2e'};
  border-radius: 17px;
  border: ${props => props.theme === 'Light' ? '2px solid #dcdcdc' : '2px solid #2d2d2e'};
  display: inline-block;
  cursor: pointer;
  color: ${props => props.theme === 'Light' ? '#777777' : 'white'};
  font-family: Arial sans-serif;
  font-size: 15px;
  font-weight: bold;
  padding: 16px 20px;
  text-decoration: none;
  text-shadow: ${props => props.theme === 'Light' ? '0 1px 0 #ffffff' : '0 1px 0 #2d2d2e'};

  &:hover {
    background: ${props => props.theme === 'Light'
	? '#dfdfdf linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%)'
	: '#4d4d4d linear-gradient(to bottom, #4d4d4d 5%, #4d4d4d 100%)'
};
  }

  &:active {
    position: relative;
    top: 1px;
  }
`
