/** function that remove '/' from breed pathame and capitalize first letter in string
@param = { string } 
*/

import capitalizeFirstLetter from './capitalizeFirstLetter';

const formatBreedName = (string) => {
    let tempString = string.slice(1);
    return capitalizeFirstLetter(tempString);
};

export default formatBreedName;