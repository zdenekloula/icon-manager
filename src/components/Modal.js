import React from "react";
import styled from "styled-components";
import Heading, { StyledHeading } from "./Heading";

const ModalBodyOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  max-width: 100%;
  z-index: 201;
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
    0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background: ${({ theme }) => theme.modalBackground};
  color: ${({ theme }) => theme.fontColor};
  max-height: calc(100vh - 20px);
  overflow: auto;
`;

const ModalHeader = styled.div`
  position: relative;
  background: ${({ theme }) => theme.primary};
  padding: 30px 20px;
  color: ${({ theme }) => theme.primaryFontColor};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  ${StyledHeading} {
    color: ${({ theme }) => theme.primaryFontColor};
  }
`;

const ModalBody = styled.div`
  position: relative;
  padding: 30px;
  color: ${({ theme }) => theme.fontColor};
  line-height: 1.4;
`;

const ModalClose = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: ${({ theme }) => theme.primaryFontColor};
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    fill: currentColor;
    pointer-events: none;
    transform: translateZ(0);
  }
`;

function Modal({ children, closeModal = null }) {
  return (
    <>
      <ModalBodyOverlay onClick={closeModal} />
      <ModalWrapper>
        <ModalHeader>
          <Heading type="heading1" element="h2">
            Manage projects
          </Heading>
          <ModalClose onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" />
            </svg>
          </ModalClose>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalWrapper>
    </>
  );
}

export default Modal;
