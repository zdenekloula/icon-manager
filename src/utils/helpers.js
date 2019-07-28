export const removeExtension = (name) => name.split('.').slice(0, -1).join('.');

export const checkIconExists = (iconName, icons) => {
  let exists = false;
  for (const key in icons) {
    const projectIcon = icons[key];
    if(iconName === projectIcon.name) {
      exists = true;
    }
  }
  return exists;
};

export const getIconWithIndex = (icon, icons) => {
  const { name, source } = icon;

  let iconNewIndex = 0;
  let iconNameWithIndex;

  for (const key in icons) {
    const projectIcon = icons[key];
    if(name === projectIcon.name || projectIcon.name.includes(name + "-")) {
      iconNewIndex++;
      iconNameWithIndex = `${name}-${iconNewIndex}`;
    } else {
      iconNameWithIndex = `${name}-${iconNewIndex}`;
    }
  }

  return {
    "filename": iconNameWithIndex + ".svg",
    "name": iconNameWithIndex,
    "source": source
  };
};

export const readTextFileAsync = (file) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;

    reader.readAsText(file);
  })
}

export const postData = (url = '', data = {}) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data, // body data type must match "Content-Type" header, it's json in this case
  })
      .then(response => response.json());
};

export const guidGenerator = () => {
  const S4 = function() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
};
