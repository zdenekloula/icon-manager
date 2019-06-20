import React, { useState } from "react";
import { List, AutoSizer } from "react-virtualized";
import { theme } from '../../config'

import IconBox from '../Icon/IconLibraryBox'
import IconBoxItem from '../Icon/IconLibraryBoxItem'
import IconBoxRow from '../Icon/IconLibraryBoxRow'

import styled from 'styled-components';

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
  * ::-webkit-scrollbar {
    width: 8px;
  }
 
  * ::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,0.4);
    border-radius: 20px;
  }

  * ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 20px;
  }
`;

const CARD_HEIGHT = 130;

const IconGrid = (props) => {
  const { icons } = props;

  const iconClick = (icon) => {
    console.log(icon.name);
  }

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
                      <IconBoxItem key={i} onClick={(e) => iconClick(icon)}>
                        <IconBox data={icon} />
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
