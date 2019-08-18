import React, { useState, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";

const DragAndDropArea = styled.div`
  position: relative;
  text-align: center;
  outline: 3px dashed ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.backgroundTertiary};
  outline-offset: -10px;
  border-radius: 4px;
  padding: 40px 0;
  transition: outline-offset 0.15s ease-in-out, background-color 0.15s linear,
    outline-color 0.15s ease-in-out;
  p {
    margin-bottom: 0;
  }
  ${({ isDragover }) =>
    isDragover &&
    `
    outline-offset: -20px;
    outline-color: #555;
    background-color: #fff;
    p {
      pointer-events: none;
    }
  `}
  &:hover,
  &:focus {
  }
`;

//Refactor this to React synthetic events instead of native
function DragAndDrop({ children, appendIcon }) {
  const [drag, setDrag] = useState(false);
  const dragEl = useRef(null);

  const handleDrag = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDrag(true);
    }
  };

  const handleDragOut = e => {
    e.preventDefault();
    e.stopPropagation();
    setDrag(false);
  };

  const handleDrop = useCallback(
    e => {
      e.preventDefault();
      e.stopPropagation();
      setDrag(false);
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        appendIcon(e.dataTransfer.files, true);
        e.dataTransfer.clearData();
      }
    },
    [appendIcon],
  );

  useEffect(() => {
    let dragElCurrent = dragEl.current;
    dragElCurrent.addEventListener("dragenter", handleDragIn);
    dragElCurrent.addEventListener("dragleave", handleDragOut);
    dragElCurrent.addEventListener("dragover", handleDrag);
    dragElCurrent.addEventListener("drop", handleDrop);
    return () => {
      dragElCurrent.removeEventListener("dragenter", handleDragIn);
      dragElCurrent.removeEventListener("dragleave", handleDragOut);
      dragElCurrent.removeEventListener("dragover", handleDrag);
      dragElCurrent.removeEventListener("drop", handleDrop);
    };
  }, [handleDrop]);

  return (
    <DragAndDropArea isDragover={drag} ref={dragEl}>
      {children}
    </DragAndDropArea>
  );
}

export default DragAndDrop;
