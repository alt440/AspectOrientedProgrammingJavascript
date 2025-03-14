const error = {}

error.division = function (functionName, ...args) {
  // Do logging
  return {
    before: () => console.log(`LOGGER ERROR ${functionName}(${args})`),
    after: () => console.log(`LOGGER ERROR ${functionName}(${args}) done`),
    error: () => console.error(`ERROR in ${functionName}(${args})`)
  };
}

export default error