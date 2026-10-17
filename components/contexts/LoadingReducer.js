import AppEvent from "@/modules/constants/event_names";
import { useReducer } from "react";

const taskReducer = (taskObj, action) => {
  switch (action.type) {
    case "loading": {
      // Guard: RENDERED is only valid from NEW_MOUNTED.
      // React Strict Mode double-invokes the mount effect, which would
      // re-dispatch RENDERED and reset an already-advancing state machine.
      // By ignoring RENDERED once we've moved past NEW_MOUNTED, we prevent
      // the preloader from getting permanently stuck at "rendered".
      if (
        action.value === AppEvent.RENDERED &&
        taskObj.current !== AppEvent.NEW_MOUNTED
      ) {
        return taskObj;
      }
      return {
        ...taskObj,
        current: action.value,
      };
    }
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
