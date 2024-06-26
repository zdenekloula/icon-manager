import React from "react";
import styled from "styled-components";

const ELEMENTS = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
};

const TYPES = {
  HEADING1: "heading1",
  HEADING2: "heading2",
  HEADING3: "heading3",
  HEADING4: "heading4",
  HEADING5: "heading5",
};

const getHeading = name => ({ type, theme }) => {
  const settings = {
    headingWeight: {
      [TYPES.HEADING1]: theme.heading.weight.heading1,
      [TYPES.HEADING2]: theme.heading.weight.heading2,
      [TYPES.HEADING3]: theme.heading.weight.heading3,
      [TYPES.HEADING4]: theme.heading.weight.heading4,
      [TYPES.HEADING5]: theme.heading.weight.heading5,
    },
    headingSize: {
      [TYPES.HEADING1]: theme.heading.size.heading1,
      [TYPES.HEADING2]: theme.heading.size.heading2,
      [TYPES.HEADING3]: theme.heading.size.heading3,
      [TYPES.HEADING4]: theme.heading.size.heading4,
      [TYPES.HEADING5]: theme.heading.size.heading5,
    },
  };
  return settings[name][type];
};

export const StyledHeading = styled(
  ({ element: Component, children, className, id }) => (
    <Component className={className} id={id}>
      {children}
    </Component>
  ),
)`
  display: ${({ display }) => display === "inlineBlock" && "inline-block"};
  font-size: ${getHeading("headingSize")}px;
  font-weight: ${getHeading("headingWeight")};
  color: ${({ theme }) => theme.fontColor};
  margin: ${({ spaceBefore }) => (spaceBefore ? `${spaceBefore}px` : 0)} 0
    ${({ spaceAfter }) => (spaceAfter ? `${spaceAfter}px` : 0)} 0;
`;

const Heading = ({
  children,
  type = TYPES.HEADING1,
  element = ELEMENTS.H1,
  id,
  display,
  spaceAfter,
  spaceBefore,
}) => (
  <StyledHeading
    id={id}
    type={type}
    element={element}
    display={display}
    spaceAfter={spaceAfter}
    spaceBefore={spaceBefore}
  >
    {children}
  </StyledHeading>
);

export default Heading;
