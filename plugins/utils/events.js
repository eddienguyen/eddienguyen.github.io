export const sendEvent = (eventName = "", detail) => {
  const newEvent = new CustomEvent(eventName, { detail });
  document.dispatchEvent(newEvent);
};

/**
 * usage in useEffect
 * useEffect(() => {
    const removeListener = listenEvent("eventName", (event) => {
      doSthWith(event.detail);
    });
    return removeListener;
 * },[])
 * @param {String} eventName 
 * @param {Function} handler 
 * @param {any} context 
 * @returns 
 */
export const listenEvent = (eventName = "", handler, context = document) => {
  context.addEventListener(eventName, handler, true);
  // return a cleanup function for useEffect in react
  return () => {
    context.removeEventListener(eventName, handler);
  };
};
