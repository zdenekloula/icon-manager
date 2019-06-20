import React  from 'react';
import styled from 'styled-components';
import { theme } from '../../config'

export const IconBoxContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  border-radius: 5px;
  background: ${theme.backgroundTertiary};
  max-width: 100%;
  height: 100%;
  overflow: hidden;
  text-align: center;
`;

const IconBoxIcon = styled.div`
  width: 100%;
  color: ${theme.fontColor};
  svg {
    max-height: 28px;
    fill: currentColor;
  }
`;

const IconBoxTitle = styled.h2`
  display: block;
  font-size: 14px;
  text-align: center;
  margin: 10px 0 0 0;
  width: 100%;
  text-overflow: ellipsis;

`;

const IconLibraryBox = (props) => {
  const { name, source } = props.data;
  return (
    <IconBoxContainer {...props}>
      <IconBoxIcon dangerouslySetInnerHTML={{__html: source}} ></IconBoxIcon>
      <IconBoxTitle>{name}</IconBoxTitle>
    </IconBoxContainer>
  );
};

export default IconLibraryBox;
