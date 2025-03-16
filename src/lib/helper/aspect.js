export default function addAspects (aspect) {
    // target is the object (i.e. aspect), prop is the type of aspect (before, after, during), and receiver
    //debugger;
    const get = (target, prop, receiver) => {
        // target is the API object, prop is the 'addition', receiver is the Proxy object
        if (typeof target[prop] !== 'function') {
            return Reflect.get(target, prop, receiver)
        }
    
        return async function (...args) {
            // this returns no name, as the functions are associated with the properties' name, not on the function
            const functionName = target[prop].name;
            // go over all that is defined under the aspect object
            // ?. is a null check
            // run becomes a function reference
            // checks if prop = addition exists on aspect, calls
            const run = pointcut => aspect[prop]?.(prop, ...args)[pointcut]?.()


            callAspect(aspect, prop, 'before', ...args);
            try {
                const result = Reflect.apply(target[prop], target, args) // this executes a function on object target with arguments arg
                await result

                callAspect(aspect, prop, 'after', ...args);
                return result
            } catch(ex){
                callAspect(aspect, prop, 'error', ...args);
                //throw ex;
            }
            
        }
    }
  
    //A proxy is a built-in object that allows you to intercept and customize fundamental operations performed on another object
    //Takes 2 arguments: object to intercept and control, object that defines behavior of the proxy
    return new Proxy({}, { get })
  }

function callAspect(aspect, prop, name, ...args){
    let nameAspectRef = aspect[name]?.(prop, ...args);
    if (typeof nameAspectRef === 'function') {
        return nameAspectRef();
    }
}