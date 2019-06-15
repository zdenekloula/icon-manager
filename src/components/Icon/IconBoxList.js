import React  from 'react';
import styled from 'styled-components';

const IconBoxList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 0 -15px;
  list-style: none;
  padding: 0;
`;

const IconBox = (props) => {
  return (
      <IconBoxList {...props}>
        {props.children}
      </IconBoxList>
  );
};

export default IconBox;
