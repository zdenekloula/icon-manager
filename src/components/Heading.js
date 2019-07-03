import React  from 'react';
import styled from 'styled-components';
//import { theme } from '../config'

const ELEMENTS = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5'
}

const TYPES = {
  HEADING1: "heading1",
  HEADING2: "heading2",
  HEADING3: "heading3",
  HEADING4: "heading4",
  HEADING5: "heading5",
}

const getHeading = name => ({type, theme}) =>  {
  const settings = {
    headingWeight: {
      [TYPES.HEADING1]: theme.heading.weight.heading1,
      [TYPES.HEADING2]: theme.heading.weight.heading2,
      [TYPES.HEADING3]: theme.heading.weight.heading3,
      [TYPES.HEADING4]: theme.heading.weight.heading4,
      [TYPES.HEADING5]: theme.heading.weight.heading5
    },
    headingSize: {
      [TYPES.HEADING1]: theme.heading.size.heading1,
      [TYPES.HEADING2]: theme.heading.size.heading2,
      [TYPES.HEADING3]: theme.heading.size.heading3,
      [TYPES.HEADING4]: theme.heading.size.heading4,
      [TYPES.HEADING5]: theme.heading.size.heading5
    }
  };
  return settings[name][type];
};

const StyledHeading = styled(
  ({ element: Component, className, children, id }) => (
    <Component
      className={className}
      id={id}
    >
      {children}
    </Component>
  ),
)`
  font-size: ${getHeading('headingSize')}px;
  font-weight: ${getHeading('headingWeight')};
  color: ${({theme}) => theme.fontColor};
  margin: 0;
`;

const Heading = ({
  children,
  type = TYPES.HEADING1,
  element = ELEMENTS.H1,
  id,
}) => (
  <StyledHeading
    id={id}
    type={type}
    element={element}
  >
    {children}
  </StyledHeading>
);


export default Heading;
