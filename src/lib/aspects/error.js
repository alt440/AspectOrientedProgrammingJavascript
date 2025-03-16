export function before(functionName, ...args){
  console.log(`LOGGER ERROR ${functionName}(${args})`);
}

export function after(functionName, ...args){
  console.log(`LOGGER ERROR ${functionName}(${args}) done`);
}

export function error(functionName, ...args){
  console.error(`ERROR in ${functionName}(${args})`);
}