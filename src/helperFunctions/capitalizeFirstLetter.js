/** function that capitalize first letter fot strings
@param = {string}
*/

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export default capitalizeFirstLetter;