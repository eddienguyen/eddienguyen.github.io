"use client";
// import { useEventEmitter } from 'ahooks';
import { createContext, useEffect, useState, useRef, useReducer } from "react";
import Preloader from "../Preloader";
import DeviceHelper from "@/plugins/utils/DeviceHelper";
import { listenEvent } from "@/plugins/utils/events";
import AppEvent from "@/modules/constants/event_names";
import { useTaskReducer } from "./LoadingReducer";
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
//  * @property { String } loadingState
 */
/** @type {import('react').Context<GeneralContext>} */
export const UIContext = createContext({});

/**
 * @param {Object} props - ClientMasterPage's properties
 * @param {'horizontal' | 'vertical'} [props.direction='vertical'] - scroll direction
 * @returns ReactComponent
 */
function UIProvider({ direction = "vertical", ...props }) {
  const timeout = useRef(null);
  // const [loadingState, setLoadingState] = useState();
  const [visibleMenu, setVisibleMenu] = useState(false); // visible scrolling nav
  const [visibleNav, setVisibleNav] = useState(false); // visible side nav

  // children
  const [mainUI, setMainUI] = useState(<></>);
  const [loadingTask, dispatch] = useTaskReducer();

  const handleResize = () => {
    updateResizingState(false);
    if (DeviceHelper.isMobile()) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }
    updateResizingState(true);
  };

  const handlePageLoaded = (event) => {
    console.log("[UIContext] handlePageLoaded");
    dispatch({
      type: AppEvent.PAGE_LOADED,
      value: true,
    });
  };

  const updateResizingState = (isDone = false) => {
    dispatch({
      type: AppEvent.PAGE_RESIZING,
      value: isDone,
    });
  };

  const ready = () => {
    dispatch({
      type: "overall",
      value: AppEvent.RENDERED,
    });
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
      const locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
          orientation: direction,
        },
      });
      window.scrollTo(0, 0); // TODO: move this on pre-loading calculation
      handleResize();
    })();

    window.addEventListener("resize", handleResize);

    // listen for page.js loaded
    const removeListener = listenEvent(AppEvent.PAGE_LOADED, handlePageLoaded);

    // start rendering children
    ready();
    return () => {
      window.removeEventListener("resize", handleResize);
      removeListener();
    };
  }, []);

  useEffect(() => {
    // if (loadingState === "init") {
    //   clearTimeout(timeout.current);
    //   timeout.current = setTimeout(() => {
    //     setLoadingState("done");
    //   }, 500);
    // }
    if (loadingTask.overall === AppEvent.RENDERED) {
      setMainUI(props.children);
      return;
    }
    if (loadingTask.overall === AppEvent.INIT) {
      if (loadingTask.init.isResizingDone && loadingTask.init.isPageLoaded) {
        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
          dispatch({
            type: "overall",
            value: AppEvent.DONE_INIT,
          });
        }, 300);
      }
    } else return;
    return () => {
      clearTimeout(timeout.current);
    };
  }, [JSON.stringify(loadingTask)]);

  const loadingState = loadingTask.overall;
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
      <Preloader isLoading={loadingState !== AppEvent.DONE_INIT}>
        <h2>{loadingState}</h2>
      </Preloader>
      {mainUI}
    </UIContext.Provider>
  );
}

export default UIProvider;
