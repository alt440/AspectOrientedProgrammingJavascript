const beforeAfter = {}

beforeAfter.subtraction = function (functionName, ...args) {
  // Do logging
  return {
    before: () => console.log(`LOGGER ${functionName}(${args})`),
    after: () => console.log(`LOGGER ${functionName}(${args}) done`)
  };
}

export default beforeAfter