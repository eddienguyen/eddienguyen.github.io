"use client";
// import { useEventEmitter } from 'ahooks';
import { createContext, useEffect, useState, useRef, useContext, useMemo } from "react";
import { usePathname } from "next/navigation";
import Preloader from "../Preloader";
import DeviceHelper from "@/plugins/utils/DeviceHelper";
import AppEvent from "@/modules/constants/event_names";
import { useTaskReducer } from "./LoadingReducer";
import { useDeviceBreakpoint } from "@/plugins/utils/useDeviceBreakpoint";

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
 * @property { Function } handlePageLoaded
 * @property { Boolean } isResizingDone
 * @property {Function} handleResize
 * @property {String} device
 */
/** @type {import('react').Context<GeneralContext>} */
export const UIContext = createContext({});

/**
 * @param {Object} props - ClientMasterPage's properties
 * @param {'horizontal' | 'vertical'} [props.direction='vertical'] - scroll direction
 * @returns ReactComponent
 */
function UIProvider({ direction = "vertical", ...props }) {
  const pathname = usePathname();
  const device = useDeviceBreakpoint();
  const timeout = useRef(null);
  const scroll = useRef(null);
  // const [loadingState, setLoadingState] = useState();
  const [visibleMenu, setVisibleMenu] = useState(false); // visible scrolling nav
  const [visibleNav, setVisibleNav] = useState(false); // visible side nav
  const [isResizingDone, setIsResizingDone] = useState(false);
  // children
  const [loadingTask, dispatch] = useTaskReducer();

  // const getDeviceBreakpoint = (width) => {
  //   let device = "xs";

  //   for (const bp of Object.keys(sizes)) {
  //     if (window.innerWidth >= sizes[bp]) {
  //       device = bp;
  //     }
  //   }
  //   return device;
  // };

  const handleResize = () => {
    console.log("[UI] handleResize");

    // setIsResizingDone(false);
    if (DeviceHelper.isMobile()) {
      document.body.style.overflowX = "hidden";
      document.documentElement.style.overflowX = "hidden";
      // document.body.style.overflow = "hidden";
      // document.documentElement.style.overflow = "hidden";
    } else {
      // if (direction === "horizontal") {
      //   document.body.style.overflow = "hidden";
      //   document.documentElement.style.overflow = "hidden";
      // } else {
      //   document.body.style.overflow = "unset";
      //   document.documentElement.style.overflow = "unset";
      // }
    }
    // setIsResizingDone(true);
    dispatch({
      type: "loading",
      value: AppEvent.PAGE_RESIZING,
    });
  };

  const handlePageLoaded = (event) => {
    dispatch({
      type: "loading",
      value: AppEvent.PAGE_LOADED,
    });
  };

  const updateResizingState = (isDone = false) => {
    setIsResizingDone(isDone);
    return; // temporary remove resizing in load tasks
    dispatch({
      type: "loading",
      value: AppEvent.PAGE_RESIZING,
    });
  };

  const ready = () => {
    dispatch({
      type: "loading",
      value: AppEvent.RENDERED,
    });
  };

  const init = () => {
    if (scroll.current && scroll.current.destroy) {
      scroll.current.destroy();
    }
    const sys = DeviceHelper.checkOS();
    // not working properly on ios safari
    if (sys.os !== "iOS") {
      if (direction == "vertical") {
        // if (!scroll.current) {
        (async () => {
          const LocomotiveScroll = (await import("locomotive-scroll")).default;
          scroll.current = new LocomotiveScroll({
            lenisOptions: {
              orientation: direction,
            },
          });
          window.scrollTo(0, 0); // TODO: move this on pre-loading calculation
        })();
        // } else {
        // scroll.resize();
        // }
        // } else {
        //   if (scroll) {
        //     scroll.destroy();
        //     setScroll(null);
        //   }
      }
    }

    dispatch({
      type: "loading",
      value: AppEvent.DONE_INIT,
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
    // this load just once on every horizontal page => reinit ?

    // handleResize();

    // window.addEventListener("resize", handleResize); // this caused re-render on resize

    // mounted ?
    ready();

    // cleanup
    return () => {
      // window.removeEventListener("resize", handleResize);
      console.log("[UI] removing scroll", scroll);
      // scroll && scroll.destroy();
      // removeListener();
    };
  }, []);

  // useEffect(() => {
  // dispatch event "resize" for locomotive scroll to listen

  //   console.log("[UIContext] RESIZING", isResizingDone);
  //   if (isResizingDone) {
  //     init();
  //   }
  //   // or destroy ?
  //   // if (scroll) {
  //   //   scroll.destroy();
  //   //   setScroll(null);
  //   // }

  //   return () => {};
  // }, [isResizingDone]);

  useEffect(() => {
    console.log("[UI] current", loadingTask.current);

    if (loadingTask.current === AppEvent.PAGE_LOADED) {
      // listen for page.js loaded

      // init locomotive ?
      // init();
      // handleResize();
      dispatch({
        type: "loading",
        value: AppEvent.INIT,
      });
    }
    if (loadingTask.current === AppEvent.INIT) {
      handleResize();
      // clearTimeout(timeout.current);
      // timeout.current = setTimeout(() => {
      //   dispatch({
      //     type: "loading",
      //     value: AppEvent.DONE_INIT,
      //   });
      // }, 300);
    }

    if (loadingTask.current === AppEvent.PAGE_RESIZING) {
      console.log("[UI] handle RESIZING");

      init();
    }

    return () => {
      clearTimeout(timeout.current);
    };
  }, [loadingTask.current]);

  const loadingState = loadingTask.current;
  return (
    <UIContext.Provider
      value={{
        // listener,
        visibleMenu,
        visibleNav,
        setVisibleMenu,
        setVisibleNav,
        loadingState,
        handlePageLoaded,
        scroll,
        isResizingDone,
        handleResize,
        device
      }}
    >
      <Preloader isLoading={loadingState !== AppEvent.DONE_INIT}>
        <h2>{loadingState}</h2>
      </Preloader>
      {props.children}
    </UIContext.Provider>
  );
}

export const useUICtx = () => {
  const ctx = useContext(UIContext);
  if (ctx === undefined) {
    throw new Error("useUICtx must be used within UIProvider");
  }
  return ctx;
};

export default UIProvider;
