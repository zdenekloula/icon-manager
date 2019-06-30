import React, { useContext } from 'react';
import styled from 'styled-components';

import Heading from '../Heading';
import IconBox from "../Icon/IconBox";
import IconBoxList from "../Icon/IconBoxList";
import IconBoxItem from "../Icon/IconBoxItem";
import LayoutColumnHeader from './LayoutColumnHeader';

import AppContext from '../../context/AppContext'

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

function postData(url = '', data = {}) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data, // body data type must match "Content-Type" header
  })
      .then(response => response.json());
}

const LayoutColumnUser = (props) => {
  const { projectsData, activeProject, setActiveProject, updateProjectsData } = useContext(AppContext);

  const PROJECT_DATA = projectsData[activeProject].icons;


  const iconBoxClick = (icon) => {

    let newProjectData = [...projectsData];
    // Do api backend call to remove icons
    const iconName = icon.name;

     postData('/api/remove-icon', JSON.stringify({
      "iconData": icon,
      "projectName": newProjectData[activeProject].filename
    }))
        .then(() => console.log("Ikona " + iconName + " odebrana."))
        .catch(error => console.error(error));

    const projectIcons = newProjectData[activeProject].icons;

    const iconIndex = (projectIcons.findIndex((filteredIcon) => filteredIcon.name === icon.name));

    const newProjectIcons = [...newProjectData[activeProject].icons.slice(0,iconIndex),
      ...newProjectData[activeProject].icons.slice(iconIndex + 1,newProjectData[activeProject].icons.length)];

    // Prepare icons data
    newProjectData[activeProject].icons = newProjectIcons;

    // React context update
    updateProjectsData(newProjectData);

  };

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
                <IconBox data={icon} onClick={() => iconBoxClick(icon)} />
              </IconBoxItem>
            )
          })}
        </IconBoxList>
      </div>
  );
};

export default LayoutColumnUser;
