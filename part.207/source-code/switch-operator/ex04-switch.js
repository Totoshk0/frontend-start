const fullSwitch = (value) => {
  let result = '';

  switch (value) {
    case 1:
      result = 'case 1';
      break;
    case 2:
      result = 'case 2';
      break;
    default:
      result = 'default case';
      break;
  }

  return result;
};

const getTimeOfYear = (month) => {
  let timeOfYear = '';
  switch (month) {
    case 1:
    case 2:
    case 12: timeOfYear = "Winter";
      break;
    case 3:
    case 4:
    case 5: timeOfYear = "Spring";
      break;
    case 6:
    case 7:
    case 8: timeOfYear = "Summer";
      break;
    case 9:
    case 10:
    case 11: timeOfYear = "Autumn";
      break;
    default:
      timeOfYear = "Nothing";
      break;
  }

  return timeOfYear;
}


export { fullSwitch, getTimeOfYear };
