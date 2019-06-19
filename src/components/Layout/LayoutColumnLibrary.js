import React, { useState, useCallback } from 'react';
import LayoutLibraryIconList from './LayoutLibraryIconList';
import LayoutColumnHeader from './LayoutColumnHeader';
import LayoutSearch from './LayoutSearch';


const LayoutColumnLibrary = (props) => {
  const LIBRARY_DATA = props.data.libraries[0].icons;

  const [libraryIcons, setLibraryIcons] = useState(LIBRARY_DATA);
  const [inputs, setInputs] = useState({});
  
  //This is going to be dynamic, its hardcoded now to [0]
  //const libraryIcons = props.data && props.data.libraries[0].icons;

  const filterIcons = useCallback((value) => {
    const filteredData =  LIBRARY_DATA.filter(obj => {
      return obj.name.includes(value);
    });
    return filteredData;
  }, [LIBRARY_DATA]);

  const handleInputChange = (event) => {
    event.persist();
    const { name, value } = event.target

    if(value.length > 0) {
      setInputs(inputs => ({...inputs, [name]: value}));
      setLibraryIcons(filterIcons(value));
    } else {
      setInputs(inputs => ({...inputs, [name]: value}));
      setLibraryIcons(props.data.libraries[0].icons);
    }
  }

  return (
    <div {...props}>
      <LayoutColumnHeader>
        <LayoutSearch type="text" placeholder="Searching..." name="librarySearch" onChange={handleInputChange} />
      </LayoutColumnHeader>
      <div>
        {libraryIcons && <LayoutLibraryIconList icons={libraryIcons} /> }
      </div>
    </div>
  );
};

export default LayoutColumnLibrary;
