import AppEvent from "@/modules/constants/event_names";
import { useReducer } from "react";

const taskReducer = (taskObj, action) => {
  switch (action.type) {
    case "overall": {
      return {
        ...taskObj,
        overall: action.value,
      };
    }
    case AppEvent.PAGE_LOADED: {
      console.log("[LoadingReducer] page_loaded, action:", action);
      return {
        overall: AppEvent.INIT,
        init: {
          ...taskObj.init,
          isPageLoaded: action.value,
        },
      };
    }
    case AppEvent.PAGE_RESIZING: {
      return {
        overall: AppEvent.INIT,
        init: {
          ...taskObj.init,
          isResizingDone: action.value,
        },
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

const initialTask = {
  overall: AppEvent.NEW_MOUNTED,
  init: {
    isResizingDone: false,
    isPageLoaded: false,
  },
};

const useTaskReducer = (reducer = taskReducer, intial = initialTask) => {
  const [loadingTask, dispatch] = useReducer(taskReducer, initialTask);

  return [loadingTask, dispatch];
};

export { taskReducer, initialTask, useTaskReducer };
