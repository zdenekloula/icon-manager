import { useRef, useEffect, useMemo, useState, useCallback } from "react";
import { createPortal } from "react-dom";

function usePortal() {
  const [isOpen, makeOpen] = useState(false);
  const portal = useRef(document.createElement("div"));

  const elToMountTo = useMemo(() => {
    return document.body;
  }, []);

  const openPortal = useCallback(
    e => {
      if (e == null) return setTimeout(() => makeOpen(true), 0);
      if (e && e.nativeEvent) e.nativeEvent.stopImmediatePropagation();

      makeOpen(true);
    },
    [makeOpen],
  );

  const togglePortal = useCallback(
    e => (isOpen ? makeOpen(false) : openPortal(e)),
    [isOpen, makeOpen, openPortal],
  );

  const closePortal = useCallback(() => {
    if (isOpen) makeOpen(false);
  }, [isOpen, makeOpen]);

  const handleKeydown = useCallback(
    e => {
      var ESC = 27;
      if (e.keyCode === ESC) makeOpen(false);
    },
    [makeOpen],
  );

  const handleOutsideMouseClick = useCallback(
    ({ target }) => {
      if (!(portal.current instanceof HTMLElement)) {
        return;
      }
      if (portal.current.contains(target) || !isOpen) {
        return;
      }
      closePortal();
    },
    [isOpen, closePortal],
  );

  useEffect(() => {
    const node = portal.current;
    elToMountTo.appendChild(portal.current);
    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("click", handleOutsideMouseClick);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("click", handleOutsideMouseClick);
      elToMountTo.removeChild(node);
    };
  }, [elToMountTo, handleOutsideMouseClick, handleKeydown]);

  const Portal = useCallback(({ children }) => {
    if (portal.current instanceof HTMLElement) {
      return createPortal(children, portal.current);
    }
    return null;
  }, []);

  return {
    openPortal,
    closePortal,
    isOpen,
    Portal,
    togglePortal,
  };
}

export default usePortal;
