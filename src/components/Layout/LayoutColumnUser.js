import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { removeExtension, checkIconExists, getIconWithIndex, readTextFileAsync, postData } from '../../utils/helpers'

import Heading from '../Heading';
import IconBox from "../Icon/IconBox";
import IconBoxList from "../Icon/IconBoxList";
import IconBoxItem from "../Icon/IconBoxItem";
import LayoutColumnHeader from './LayoutColumnHeader';
import Modal from '../../components/Modal';

import useForm from '../../hooks/useForm';
import usePortal from '../../hooks/useModal';

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

const Button = styled.button`
  display: block;
  background: #00ff00;
  color: #fff;
`;

const LayoutColumnUser = (props) => {
  const { projectsData, activeProject, setActiveProject, updateProjectsData } = useContext(AppContext);
  // const PROJECT_DATA = projectsData[activeProject].icons;

  const [newProjectData, setNewProjectData] = useForm({});

  const removeIcon = (icon) => {
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
      "projectPath": newProjectData[activeProject].local_path
    }))
      .then(() => {
        console.log("Client: Ikona " + iconName + " odebrana.")
      })
      .catch(error => console.error(error));
  };

  const generateLibrary = () => {
    console.log("generate library")
  };

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
        };
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
      "projectPath": newProjectData[activeProject].local_path
    }))
      .then(() => console.log("Ikony pridany."))
      .catch(error => console.error(error));
  };

  const appendProject = () => {
    // Update context object
    const dataForNewProjectContext = {
      ...newProjectData,
      icons: [],
      local_path: newProjectData.local_path + newProjectData.filename + ".json"
    };

    const dataForNewProjectSettings = {
      ...newProjectData,
      filename: newProjectData.filename + ".json"
    };

    const updatedProjects = [
        ...projectsData,
        dataForNewProjectContext
    ];

    updateProjectsData(updatedProjects);

    // Update local settings

    //Post data to backend
    postData('/api/append-project', JSON.stringify({
      "projectData": dataForNewProjectSettings,
    }))
      .then(() => {
        console.log("Client: Project " + newProjectData.name + " vytvoren.")
      })
      .catch(error => console.error(error));
  };

  const {
    openPortal: openFirstPortal,
    closePortal: closeFirstPortal,
    isOpen: isFirstPortalOpened,
    Portal: FirstPortal,
    togglePortal: toggleFirstPortal,
  } = usePortal();

  return (
      <div>
        <LayoutColumnHeader columnProjects>
          <div>
            <Heading element="h2" type="heading1">Your projects</Heading>

            <button onClick={toggleFirstPortal}>Open Modal</button>
            { isFirstPortalOpened &&
              <FirstPortal>
                <Modal closeModal={closeFirstPortal}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorem doloribus, eligendi ipsam itaque iure iusto libero, magnam, neque nisi officia optio pariatur provident quis quod quos reiciendis voluptas voluptate!</p>
                </Modal>
              </FirstPortal>
            }

            <br/>
            <input type="text" name="name" placeholder="Project name" onChange={setNewProjectData} />
            <input type="text" name="local_path" placeholder="Path to project" onChange={setNewProjectData} /> <br/>
            <input type="text" name="filename" placeholder="Filename" onChange={setNewProjectData} />.json
            <span>{newProjectData && newProjectData.name}</span>

            <Button onClick={() => appendProject("test", "another")}>Add project</Button>

          </div>

          <LibraryList>
            {projectsData.map((item, index) => (
              <LibraryItem key={index}>
                <LibraryLink href="#" onClick={() => setActiveProject(index)} isActive={index === activeProject}>{item.name}</LibraryLink>
              </LibraryItem>
            ))}
          </LibraryList>

        </LayoutColumnHeader>

        <IconBoxList>
          {
            projectsData[activeProject].icons.map((icon, index) => {
            return(
              <IconBoxItem key={index}>
                <IconBox data={icon} onClick={() => removeIcon(icon)} />
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
