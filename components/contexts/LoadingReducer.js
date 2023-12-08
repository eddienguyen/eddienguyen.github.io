import AppEvent from "@/modules/constants/event_names";
import { useReducer } from "react";

const taskReducer = (taskObj, action) => {
  switch (action.type) {
    case "loading": {
      // console.log("[LoadingReducer] ", action.type, action.value);
      return {
        ...taskObj,
        current: action.value,
      };
    }
    // case AppEvent.PAGE_RESIZING: {
    //   // console.log("[LoadingReducer] ", action.type, action.value);
    //   return {
    //     current: AppEvent.INIT,
    //     init: {
    //       ...taskObj.init,
    //       isResizingDone: action.value,
    //     },
    //   };
    // }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

const initialTask = {
  current: AppEvent.NEW_MOUNTED,
};

const useTaskReducer = (reducer = taskReducer, intial = initialTask) => {
  const [loadingTask, dispatch] = useReducer(taskReducer, initialTask);

  return [loadingTask, dispatch];
};

export { taskReducer, initialTask, useTaskReducer };
