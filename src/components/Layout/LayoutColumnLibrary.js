import React from 'react';
import IconBoxItem from "../Icon/IconBoxItem";
import IconBox from "../Icon/IconBox";
import IconBoxList from "../Icon/IconBoxList";

const LayoutColumnLibrary = (props) => {
  console.log(props);
  //This needs to be dynamic, its hardcoded now to [0]
  const libraryIcons = props.data && props.data.libraries[0].icons;

  return (
      <div {...props}>
        <IconBoxList>
          {props.data &&
          libraryIcons.map((icon, index) => {
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

export default LayoutColumnLibrary;
