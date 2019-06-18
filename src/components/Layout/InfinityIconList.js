import React, { Component } from "react";
import { List, AutoSizer } from "react-virtualized";

import IconBox from '../Icon/IconLibraryBox'
import IconBoxItem from '../Icon/IconLibraryBoxItem'
import IconBoxRow from '../Icon/IconLibraryBoxRow'

import styled from 'styled-components';

const IconGridContainer = styled.div`
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

class IconGrid extends Component {
  test() {
    console.log("test");
  }
  render() {
    const { icons } = this.props;

    return (
      <IconGridContainer style={{ marginTop:"10px", height: "85vh" }}>
       <AutoSizer>
          {({ height, width }) => {
            const itemsPerRow = Math.floor(width / CARD_HEIGHT) || 1;
            const rowCount = Math.ceil(icons.length / itemsPerRow);

            return (

                <List
                  width={width}
                  height={height}
                  rowCount={rowCount}
                  rowHeight={CARD_HEIGHT}
                  rowRenderer={({ index, key, style }) => {
                    const items = [];
                    const fromIndex = index * itemsPerRow;
                    const toIndex = Math.min(
                      fromIndex + itemsPerRow,
                      icons.length
                    );

                    for (let i = fromIndex; i < toIndex; i++) {
                      let location = icons[i];
                      items.push(
                        <IconBoxItem key={i} onClick={this.test}>
                          <IconBox data={location} />
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
}

export default IconGrid;