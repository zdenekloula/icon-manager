import React from 'react';
import IconBox from "../Icon/IconBox";
import IconBoxList from "../Icon/IconBoxList";
import IconBoxItem from "../Icon/IconBoxItem";

const LayoutColumnUser = (props) => {
  const userIcons = props.data && props.data.projects[0].icons;
  return (
      <div>
        <IconBoxList>
          {props.data &&
          userIcons.map((icon, index) => {
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
