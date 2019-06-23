import React, { useContext } from 'react';
import styled from 'styled-components';

import Heading from '../Heading';
import IconBox from "../Icon/IconBox";
import IconBoxList from "../Icon/IconBoxList";
import IconBoxItem from "../Icon/IconBoxItem";
import AppContext from '../../context/AppContext'
import LayoutColumnHeader from './LayoutColumnHeader';


const LibraryList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 28px 0 0 0;
  
`;

const LibraryLink = styled.a`
  position: relative;
  display: block;
  padding: 16px 18px;
  color: ${(props) => props.theme.fontColor};
  text-decoration: none;
  ${({isActive, theme}) => isActive && `
    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      display: block;
      background: ${theme.primary};
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      width: 100%;
      height: 4px;
    }
  `}
`;

const LibraryItem = styled.li`
  &:first-child {
    ${LibraryLink} {
      //border-top: 1px solid ${({theme}) => theme.borderColor};
    }
  }
`;


const LayoutColumnUser = (props) => {
  const userIcons = props.data && props.data.projects[0].icons;
  const { projectsData, activeProject, setActiveProject } = useContext(AppContext);
  
  const PROJECT_DATA = projectsData[activeProject].icons

  return (
      <div>
        <LayoutColumnHeader columnProjects>
          <Heading element="h2" type="heading1">Your projects</Heading>

          <LibraryList>
            {projectsData.map((item, index) => (
              <LibraryItem key={index}>
                <LibraryLink href="#" onClick={() => setActiveProject(index)} isActive={index === activeProject}>{item.name}</LibraryLink>
              </LibraryItem>
            ))}
          </LibraryList>

        </LayoutColumnHeader>

        <IconBoxList>
          {PROJECT_DATA.map((icon, index) => {
            return(
              <IconBoxItem key={index}>
                <IconBox data={icon} />
              </IconBoxItem>
            )
          })}
        </IconBoxList>
      </div>
  );
};

export default LayoutColumnUser;
