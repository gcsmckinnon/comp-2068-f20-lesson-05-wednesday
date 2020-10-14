import React from 'react';
import Styles from './styles';

const Header = ({title}) => {
  return (
    <Styles.Header>
      <h1>{title}</h1>
    </Styles.Header>
  );
}
 
export default Header;