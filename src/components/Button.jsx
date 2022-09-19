import React from 'react';
import styled from "styled-components";

const StyledButton = styled.div`
  box-shadow: inset 0 1px 0 0 #ffffff;
  background: #ededed linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
  border-radius: 17px;
  border: 2px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #777777;
  font-family: Arial sans-serif;
  font-size: 15px;
  font-weight: bold;
  padding: 16px 18px;
  text-decoration: none;
  text-shadow: 0 1px 0 #ffffff;

  &:hover {
    background: #dfdfdf linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
  }

  &:active {
    position: relative;
    top: 1px;
  }
`

export const Button = (props) => {
	return (
		<StyledButton {...props}/>
	);
};

