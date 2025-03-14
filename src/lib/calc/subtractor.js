import beforeAfter from '../aspects/beforeAfter.js';
import addAspects from '../helper/aspect.js';

const subtractor = addAspects(beforeAfter);

subtractor.subtraction = function (addOne, addTwo) {
  return addOne - addTwo;
}

export default subtractor