const logger = {}

logger.addition = function (functionName, ...args) {
  // Do logging
  return {
    before: () => console.log('LOGGER Addition Aspect: Addition ', args)
  };
}

export default logger