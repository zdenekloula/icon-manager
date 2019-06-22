import React, { useState, useCallback, useEffect, useContext } from 'react';
import LayoutLibraryIconList from './LayoutLibraryIconList';
import LayoutColumnHeader from './LayoutColumnHeader';
import LayoutSearch from './LayoutSearch';
import Heading from '../Heading';
import AppContext from '../../context/AppContext'

const getFilteredIconList = (value, fullList) => {
  if(!value) {
    return fullList
  } else {
    const filtered = fullList.filter(obj => {
      return obj.name.includes(value);
    });
    return filtered;
  }
}

const LayoutColumnLibrary = (props) => {
  const { appData } = useContext(AppContext);
  //const LIBRARY_DATA = appData.libraries[props.activeLibrary].icons;
  const LIBRARY_DATA = props.data.libraries[props.activeLibrary].icons;
  
  const [filteredIcons, setFilteredIcons] = useState(null);
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    
    setFilteredIcons(getFilteredIconList(inputs.librarySearch, LIBRARY_DATA));
    
  }, [LIBRARY_DATA, inputs.librarySearch])

  
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
      setFilteredIcons(filterIcons(value));
    } else {
      setInputs(inputs => ({...inputs, [name]: value}));
      setFilteredIcons(LIBRARY_DATA);
    }
  }

  return (
    <div>
      <LayoutColumnHeader>
        <Heading element="h1" type="heading1">Library Icons</Heading>
        <LayoutSearch type="text" placeholder="Searching..." name="librarySearch" onChange={handleInputChange} />
      </LayoutColumnHeader>
      <div>
        {filteredIcons && <LayoutLibraryIconList icons={filteredIcons} /> }
      </div>
    </div>
  );
};

export default LayoutColumnLibrary;
