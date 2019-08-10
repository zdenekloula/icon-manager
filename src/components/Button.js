import React, { useMemo }  from 'react';
import styled from 'styled-components';

const COLORS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger'
};

const getButton = name => ({theme, color}) => {
  const settings = {
    buttonColor: {
      [COLORS.PRIMARY]: theme.primary,
      [COLORS.SECONDARY]: theme.secondary,
      [COLORS.SUCCESS]: theme.success,
      [COLORS.WARNING]: theme.warning,
      [COLORS.DANGER]: theme.danger
    }
  };
  const buttonStyle = settings[name][color] || settings['buttonColor']['primary'];
  return buttonStyle;
}

export const StyledButton = styled((props) => {
  const {
    element,
    className,
    children,
    color,
    ...other
  } = props;

  const Component = element === "a" ? "a" : "button";
  const buttonType = props.submit ? "submit" : "button";

  if(Component === "button" && props.href) {
    console.error(`<Button> component has been defined as "button" with existing "href". Either remove "href" from element change element to "a".`);
  }

  if(Component === "a" && !props.href) {
    console.error(`<Button> component has a defined "a" tag without "href" attribute. Either add "href" to element or use element as "button".`);
  }
  return(
    <Component 
      type={!Component === "a" ? buttonType : undefined}
      className={className} 
      {...other}
    >
      {children}
    </Component>
  )
})`
  display: inline-block;
  vertical-align: middle;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
`;

const StyledButtonText = styled.span`
  position: relative;
  display: block;
  padding: 12px 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  border-radius: 2px;
  background: ${getButton('buttonColor')};
  color: #fff;
  text-decoration: none;
  transition: background 0.3s,color 0.3s;  
`

const Button = (props) => {
  const {
    color,
    className,
    children,
    ...otherProps
  } = props;

  return (
    <StyledButton {...otherProps}>
      <StyledButtonText color={color}>
        {children}
      </StyledButtonText>
    </StyledButton>
  )
};;


export default Button;
