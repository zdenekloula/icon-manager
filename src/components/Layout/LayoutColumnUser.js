import React, { useContext } from 'react';
import styled from 'styled-components';

import { removeExtension, checkIconExists, getIconWithIndex, readTextFileAsync, postData } from '../../utils/helpers'

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

const LayoutColumnUser = (props) => {
  const { projectsData, activeProject, setActiveProject, updateProjectsData } = useContext(AppContext);
  const PROJECT_DATA = projectsData[activeProject].icons;

  const iconBoxClick = (icon) => {
    let newProjectData = [...projectsData];
    const iconName = icon.name;
    const projectIcons = newProjectData[activeProject].icons;
    const iconIndex = (projectIcons.findIndex((filteredIcon) => filteredIcon.name === icon.name));
    const newProjectIcons = [
      ...newProjectData[activeProject].icons.slice(0,iconIndex),
      ...newProjectData[activeProject].icons.slice(iconIndex + 1, newProjectData[activeProject].icons.length)
    ];

    /* Data update React Context + Backend */

    // Prepare icons data
    newProjectData[activeProject].icons = newProjectIcons;
    // React context update
    updateProjectsData(newProjectData);

    //Post data to backend
    postData('/api/remove-icon', JSON.stringify({
      "iconData": icon,
      "projectName": newProjectData[activeProject].filename
    }))
      .then(res => {
        console.log("Client: Ikona " + iconName + " odebrana.")
      })
      .catch(error => console.error(error));
  };

  const generateLibrary = () => {
    console.log("generate library")
  }

  const appendIcon = async (event) => {
    let newProjectData = [...projectsData];
    let iconsToAppend = [];
    const inputFiles = event.target.files; 
    const projectIcons = newProjectData[activeProject].icons;

    if(inputFiles.length > 0) {
      for(let i = 0; i < inputFiles.length; i++) {
        const files = inputFiles[i];
        const filename = files.name;
        const name = removeExtension(filename);

        let icon = {
          "filename": "",
          "name": "",
          "source": ""
        }
        icon.filename = filename;
        icon.name = name;
        icon.source = await readTextFileAsync(files);

        if (!checkIconExists(name, projectIcons)) {
          iconsToAppend.push(icon);
        } else {
          const newIcon = getIconWithIndex(icon, projectIcons);
          iconsToAppend.push(newIcon);
        }
      }
    } else {
      console.log("chyba uploadu");
    }

    for(let i = 0; i < iconsToAppend.length; i++) {
      newProjectData[activeProject].icons = [...projectsData[activeProject].icons, iconsToAppend[i]];
    }
    updateProjectsData(newProjectData);

    postData('/api/upload-icon', JSON.stringify({
      "icons": iconsToAppend,
      "projectName": newProjectData[activeProject].filename
    }))
      .then(() => console.log("Ikony pridany."))
      .catch(error => console.error(error));

  }

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

        <div>
          <label>Path to final folder</label>
          <input type="text" />
          <button onClick={generateLibrary}>
            Generovat
          </button>
          <br/>

          <input type="file" name="test" id="test" onChange={(event) => appendIcon(event)} multiple/>
        </div>
      </div>
  );
};

export default LayoutColumnUser;
