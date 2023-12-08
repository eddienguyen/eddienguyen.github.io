export default class AppEvent {
  static get NEW_MOUNTED() {
    // default
    return "new";
  }

  static get RENDERED() {
    return "rendered";
  }

  static get INIT() {
    return "initializing";
  }

  static get INTERACTIVE() {
    return "interactive";
  }
  static get PAGE_LOADED() {
    return "page_loaded"; // initial phase
  }
  static get PAGE_RESIZING() {
    return "resizing"; // interactive phase
  }

  static get DONE_INIT() {
    return "done";
  }
}

// new => rendered => page_loaded => initializing ( + resizing +...) =>  done
// __________________________________resizing => done