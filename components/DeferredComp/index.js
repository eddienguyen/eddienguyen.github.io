import { useEffect, useState, useCallback } from "react";
// import { requestIdleCallback } from '../utils/requestIdleCallback'

/**
 * Load these dynamic components and other third party js like hotjar and analytics scripts using a deferred component.
 * @param {*} param0
 * @returns
 */
export function DeferredComp({ Component }) {
  const [canLoad, setCanLoad] = useState(false);
  const load = useCallback(() => {
    requestIdleCallback(() => {
      setCanLoad(true);
    });
  }, []);
  useEffect(() => {
    if (document.readyState === "complete") {
      load();
    } else {
      window.addEventListener("load", load);
    }
    return () => {
      window.removeEventListener("load", load);
    };
  }, []);
  if (canLoad) {
    return Component;
  }
  return null;
}