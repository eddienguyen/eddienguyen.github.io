import { useReducer } from "react";

const taskReducer = (taskObj, action) => {
  switch (action.type) {
    case "overall": {
      return {
        ...taskObj,
        overall: action.value,
      };
    }
    case "page_loaded": {
      return {
        overall: "initializing",
        init: {
          ...taskObj.init,
          isPageLoaded: action.value,
        },
      };
    }
    case "resizing": {
      return {
        overall: "initializing",
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
  overall: "new",
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
