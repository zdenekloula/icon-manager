import React  from 'react';
import styled from 'styled-components';

const StyledLayout = styled.main`
  display: flex;
`;

const Layout = (props) => {
  return (
      <StyledLayout {...props}>
        {props.children}
      </StyledLayout>
  );
};

export default Layout;
