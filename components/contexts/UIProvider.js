"use client";
// import { useEventEmitter } from 'ahooks';
import { createContext, useEffect, useState, useRef } from "react";
import Preloader from "../Preloader";
import DeviceHelper from "@/plugins/utils/DeviceHelper";
// listener usage:
// - yield some_value:
// listener.emit({
//     type: "some_value",
//   });

// - listen some_value:
// if (listener) {
//     listener.useSubscription((e) => {
//         onListen(e);
//     });
// }
// const onListen = (e) => {
//     const type = e.type;
//     switch (type) {
//         case "some_value":
//             console.log('value string');
//             doSomething();
//             break;
//         default:
//             break;
//     }
// };

// end listener usage

/**
 * Context that stores states that effects UI/UX
 * @typedef {Object} GeneralContext
 * @property { Boolean } visibleMenu
 * @property { Boolean } visibleNav
 * @property { Function } setVisibleMenu
 * @property {  } setVisibleNav
 * @property { String } loadingState
 */
/** @type {import('react').Context<GeneralContext>} */
export const UIContext = createContext({});

function UIProvider(props) {
  const timeout = useRef(null);
  const [loadingState, setLoadingState] = useState("new");
  const [visibleMenu, setVisibleMenu] = useState(false); // visible scrolling nav
  const [visibleNav, setVisibleNav] = useState(false); // visible side nav

  const handleResize = () => {
    setLoadingState("init");
    if (DeviceHelper.isMobile()) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }
  };

  //   const listener = useEventEmitter();
  useEffect(() => {
    // update body to stop scrolling when menu visible
    if (visibleMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {};
  }, [visibleMenu]);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      window.scrollTo(0, 0); // TODO: move this on pre-loading calculation
      handleResize();
      setLoadingState("init");
    })();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (loadingState === "init") {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        setLoadingState("done");
      }, 500);
    }
    return () => {
      clearTimeout(timeout.current);
    };
  }, [loadingState]);

  return (
    <UIContext.Provider
      value={{
        // listener,
        visibleMenu,
        visibleNav,
        setVisibleMenu,
        setVisibleNav,
        loadingState,
      }}
    >
      <Preloader isLoading={loadingState !== "done"}>
        <h2>{loadingState}</h2>
      </Preloader>
      {props.children}
    </UIContext.Provider>
  );
}

export default UIProvider;
