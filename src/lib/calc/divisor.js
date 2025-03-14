import error from '../aspects/error.js';
import addAspects from '../helper/aspect.js';

const divisor = addAspects(error);

divisor.division = function (addOne, addTwo) {
    if(addTwo === 0){
        throw new Error("Cannot divide by zero");
    }
    return addOne/addTwo;
}

export default divisor