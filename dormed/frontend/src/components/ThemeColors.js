const getBackgroundColor = (theme) => {
    switch (theme) {
      case 'theme1':
        return 'white';
      case 'theme2':
        return 'lightblue';
      case 'theme3':
        return 'lightgreen';
      case 'theme4':
        return 'lavender';
      case 'theme5':
        return 'lightgray';
      default:
        return 'white';
    }
  };
  
 const getTextColor = (theme) => {
    switch (theme) {
      case 'theme1':
        return 'black';
      case 'theme2':
        return 'white';
      case 'theme3':
        return 'black';
      case 'theme4':
        return 'black';
      case 'theme5':
        return 'black';
      default:
        return 'black';
    }
  };
  
export {getTextColor}
export {getBackgroundColor}

  

  