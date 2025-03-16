export function before(functionName, ...args){
  console.log(`LOGGER ${functionName}(${args})`);
}

export function after(functionName, ...args){
  console.log(`LOGGER ${functionName}(${args}) done`);
}