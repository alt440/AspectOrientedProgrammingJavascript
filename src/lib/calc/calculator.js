import * as logger from '../aspects/logger.js';
import addAspects from '../helper/aspect.js';

const api = addAspects(logger);

api.addition = function (addOne, addTwo) {
  return addOne + addTwo;
}

export default api