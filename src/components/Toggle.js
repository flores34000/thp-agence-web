import React from 'react';
import styled from 'styled-components';
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';
import Brightness2Icon from '@material-ui/icons/Brightness2';



export const Toggle = ({ theme, toggleTheme }) => {
  console.log(theme);
  return (
    <div onClick={toggleTheme}>
       
      { theme === 'light' ? 
      <Moon><Brightness2Icon /></Moon> 
      : 
      <Sun><Brightness5OutlinedIcon/></Sun>}
    </div>
  )
}


let Sun, Moon;

Sun = Moon = styled.svg`
 
  transition: all .5s linear;
  width: 2rem;
  cursor: pointer;
  :hover {
      transform:scale(1.5);
      color:#bb86fc;
    }
`;