import React  from 'react';
import styled from 'styled-components';

const IconBoxItem = styled.li`
  vertical-align: top;
  text-align: left;
  letter-spacing: normal;
  display: flex;
  flex-direction: column;
  flex: 1 1 130px;
  width: 100%;
  position: relative;
  border-left: 20px solid transparent;
  margin-bottom: 15px;
  max-width: 20%;
  min-width: 130px;
`;

const IconBox = (props) => {
  return (
      <IconBoxItem {...props}>
        {props.children}
      </IconBoxItem>
  );
};

export default IconBox;
