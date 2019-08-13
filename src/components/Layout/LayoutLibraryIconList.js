import React, { useContext } from "react";
import { List, AutoSizer } from "react-virtualized";
import styled from 'styled-components';

import { checkIconExists, getIconWithIndex } from '../../utils/helpers'

import IconBox from '../Icon/IconLibraryBox'
import IconBoxItem from '../Icon/IconLibraryBoxItem'
import IconBoxRow from '../Icon/IconLibraryBoxRow'

import AppContext from '../../context/AppContext'

const IconGridContainer = styled.div`
  margin-top: 20px;
  height: calc(100vh  - 180px);
  overflow-x: hidden !important;
  padding: 0 15px 0 10px;

  .ReactVirtualized__List,
  .ReactVirtualized__Grid__innerScrollContainer {
    overflow-x: hidden !important;
  }

  .ReactVirtualized__List:focus {
    outline: 0;
  }

  &:focus {
    outline: 0;
  }
`;

const CARD_HEIGHT = 130;

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

const IconGrid = (props) => {
  const { icons } = props;

  const { projectsData, updateProjectsData, activeProject } = useContext(AppContext);

  const iconBoxClick = (icon) => {
    if(projectsData.length > 0) {
      let newProjectData = [...projectsData];
      const projectIcons = newProjectData[activeProject].icons;
      const iconName = icon.name;

      if (!checkIconExists(iconName, projectIcons)) {
        postData('/api/append-icon', JSON.stringify({
          "iconData": icon,
          "projectPath": newProjectData[activeProject].local_path
        }))
          .then(() => console.log("Ikona " + iconName + " pridana."))
          .catch(error => console.error(error));

        // Prepare icons data
        newProjectData[activeProject].icons = [...projectsData[activeProject].icons, icon];

        // React context update
        updateProjectsData(newProjectData);
      } else {
        const newIcon = getIconWithIndex(icon, projectIcons);

        postData('/api/append-icon', JSON.stringify({
          "iconData": newIcon,
          "projectPath": newProjectData[activeProject].local_path
        }))
          .then(() => console.log("Ikona " + iconName + " pridana."))
          .catch(error => console.error(error));

        newProjectData[activeProject].icons = [...projectsData[activeProject].icons, newIcon];

        // React context update
        updateProjectsData(newProjectData);

        // There will be "already exists notification";
        console.log("vami zadana ikona jiz existuje");
      }
    }
  };

  return (
    <IconGridContainer>
     <AutoSizer>
        {({ height, width }) => {
          let itemsPerRow = Math.floor(width / CARD_HEIGHT) > 4 ? 4 : Math.floor(width / CARD_HEIGHT) || 1;

          const rowCount = Math.ceil(icons.length / itemsPerRow);

          return (

              <List
                width={width}
                height={height}
                rowCount={rowCount}
                rowHeight={CARD_HEIGHT}
                overscanRowCount={0}
                rowRenderer={({ index, key, style }) => {
                  const items = [];
                  const fromIndex = index * itemsPerRow;
                  const toIndex = Math.min(
                    fromIndex + itemsPerRow,
                    icons.length
                  );

                  for (let i = fromIndex; i < toIndex; i++) {
                    let icon = icons[i];
                    items.push(
                      <IconBoxItem key={i}>
                        <IconBox data={icon} onClick={(e) => iconBoxClick(icon)} />
                      </IconBoxItem>
                    );
                  }

                  return (
                    <IconBoxRow key={key} style={style}>
                      {items}
                    </IconBoxRow>
                  );
                }}
              />
          );
        }}
      </AutoSizer>
    </IconGridContainer>
  );
}

export default IconGrid;
