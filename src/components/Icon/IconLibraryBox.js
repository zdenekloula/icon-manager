import React, { useRef } from "react";
import styled from "styled-components";
//import { theme } from '../../config'

const IconBoxOptions = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  opacity: 0;
  transition: 0.3s opacity;
  background: transparent;
`;

export const IconBoxContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  border-radius: 5px;
  background: ${props => props.theme.backgroundTertiary};
  max-width: 100%;
  height: 100%;
  overflow: hidden;
  text-align: center;
  &:hover {
    ${IconBoxOptions} {
      opacity: 1;
    }
  }
`;

const IconBoxIcon = styled.div`
  width: 100%;
  color: ${props => props.theme.fontColor};
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
  word-break: break-all;
  color: ${props => props.theme.fontColor};
  font-weight: 400;
`;

const IconBoxOptionButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  width: 50%;
  text-align: center;
  font-size: 14px;
  background: ${props => props.theme.handleColor};
  border-right: 1px solid ${props => props.theme.borderColor};
  cursor: pointer;
  &:hover,
  &:focus {
    background: ${props => props.theme.primary};
  }
`;

const IconBoxOptionTextarea = styled.textarea`
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  opacity: 0;
`;

const IconLibraryBox = props => {
  const { name, source } = props.data;
  const textAreaRef = useRef(null);
  const copyCode = event => {
    event.stopPropagation();
    textAreaRef.current.select();
    document.execCommand("copy");
  };
  const downloadCode = (event, source) => {
    event.stopPropagation();
    var svgBlob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
    var svgUrl = URL.createObjectURL(svgBlob);

    var downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = `${name}.svg`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <IconBoxContainer {...props}>
      <IconBoxIcon dangerouslySetInnerHTML={{ __html: source }} />
      <IconBoxTitle>{name}</IconBoxTitle>
      <IconBoxOptions>
        <IconBoxOptionTextarea ref={textAreaRef} defaultValue={source} />
        <IconBoxOptionButton onClick={copyCode}>Copy</IconBoxOptionButton>
        <IconBoxOptionButton onClick={event => downloadCode(event, source)}>
          Download
        </IconBoxOptionButton>
      </IconBoxOptions>
    </IconBoxContainer>
  );
};

export default IconLibraryBox;
