export default class DeviceHelper {
  static get isPotrait() {
    if (window && !window.orientation)
      return window.matchMedia("(orientation: portrait)").matches;
    return !(
      (window && window.orientation === 90) ||
      (window && window.orientation === -90)
    );
  }

  static get isLandscape() {
    return !this.isPotrait;
  }

  static async requestDeviceOrientationData() {
    let _isDeviceOrientationSupport = false;
    if (!window) {
      // not supported
      console.warn("`window` not found");
      _isDeviceOrientationSupport = false;
      return _isDeviceOrientationSupport;
    }

    // console.log(window)
    if (
      window.DeviceOrientationEvent !== undefined &&
      typeof window.DeviceOrientationEvent.requestPermission === "function"
    ) {
      console.log(
        "This browser can be requested for `DeviceOrientationEvent` permission"
      );
      try {
        const response =
          await window.DeviceOrientationEvent.requestPermission();
        // console.log(response)
        if (response == "granted") {
          console.log("`DeviceOrientationEvent` permission -> granted!");
          _isDeviceOrientationSupport = true;
        } else {
          // rejected
          console.log("`DeviceOrientationEvent` permission ->", response);
          _isDeviceOrientationSupport = false;
        }
      } catch (error) {
        // not supported
        console.log(error);
        _isDeviceOrientationSupport = false;
      }
    } else {
      // not supported
      console.warn("`window.DeviceOrientationEvent` not found");
      _isDeviceOrientationSupport = false;
    }

    return _isDeviceOrientationSupport;
  }

  static isMobile() {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true;
    } else {
      return false;
    }
  }

  static isSupportWebGL() {
    // return Detector.webgl();
    const Detector = {
      canvas: !!window.CanvasRenderingContext2D,
      webgl: (function () {
        //
        try {
          var canvas = document.createElement("canvas");
          return !!(
            window.WebGLRenderingContext &&
            (canvas.getContext("webgl") ||
              canvas.getContext("experimental-webgl"))
          );
        } catch (e) {
          return false;
        }
      })(),
      workers: !!window.Worker,
      fileapi:
        window.File && window.FileReader && window.FileList && window.Blob,

      getWebGLErrorMessage: function () {
        var element = document.createElement("div");
        element.id = "webgl-error-message";
        element.style.fontFamily = "monospace";
        element.style.fontSize = "13px";
        element.style.fontWeight = "normal";
        element.style.textAlign = "center";
        element.style.background = "#fff";
        element.style.color = "#000";
        element.style.padding = "1.5em";
        element.style.width = "400px";
        element.style.margin = "5em auto 0";

        if (!this.webgl) {
          element.innerHTML = window.WebGLRenderingContext
            ? [
                'Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />',
                'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.',
              ].join("\n")
            : [
                'Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>',
                'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.',
              ].join("\n");
        }

        return element;
      },

      addGetWebGLMessage: function (parameters) {
        var parent, id, element;

        parameters = parameters || {};

        parent =
          parameters.parent !== undefined ? parameters.parent : document.body;
        id = parameters.id !== undefined ? parameters.id : "oldie";

        element = Detector.getWebGLErrorMessage();
        element.id = id;

        parent.appendChild(element);
      },
    };

    return Detector.webgl;
  }

  static checkOS(option) {
    option = option != undefined ? option : {};

    if (typeof window == "undefined") return "";

    var callback = option.hasOwnProperty("callback") ? option.callback : null;

    if (typeof window.deviceInfo == "undefined") {
      var unknown = "-";

      // screen
      var screenSize = "";
      if (screen.width) {
        var width = screen.width ? screen.width : "";
        var height = screen.height ? screen.height : "";
        screenSize += "" + width + " x " + height;
      }

      // browser
      var nVer = navigator.appVersion;
      var nAgt = navigator.userAgent;
      var browser = navigator.appName;
      var version = "" + parseFloat(navigator.appVersion);
      var majorVersion = parseInt(navigator.appVersion, 10);
      var nameOffset, verOffset, ix;

      // Opera
      if ((verOffset = nAgt.indexOf("Opera")) != -1) {
        browser = "Opera";
        version = nAgt.substring(verOffset + 6);
        if ((verOffset = nAgt.indexOf("Version")) != -1) {
          version = nAgt.substring(verOffset + 8);
        }
      }
      // Opera Next
      if ((verOffset = nAgt.indexOf("OPR")) != -1) {
        browser = "Opera";
        version = nAgt.substring(verOffset + 4);
      }
      // Edge
      else if ((verOffset = nAgt.indexOf("Edge")) != -1) {
        browser = "Microsoft Edge";
        version = nAgt.substring(verOffset + 5);
      }
      // MSIE
      else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
        browser = "Microsoft Internet Explorer";
        version = nAgt.substring(verOffset + 5);
      }
      // Chrome
      else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
        browser = "Chrome";
        version = nAgt.substring(verOffset + 7);
      }
      // Safari
      else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
        browser = "Safari";
        version = nAgt.substring(verOffset + 7);
        if ((verOffset = nAgt.indexOf("Version")) != -1) {
          version = nAgt.substring(verOffset + 8);
        }
      }
      // Firefox
      else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
        browser = "Firefox";
        version = nAgt.substring(verOffset + 8);
      }
      // MSIE 11+
      else if (nAgt.indexOf("Trident/") != -1) {
        browser = "Microsoft Internet Explorer";
        version = nAgt.substring(nAgt.indexOf("rv:") + 3);
      }
      // Other browsers
      else if (
        (nameOffset = nAgt.lastIndexOf(" ") + 1) <
        (verOffset = nAgt.lastIndexOf("/"))
      ) {
        browser = nAgt.substring(nameOffset, verOffset);
        version = nAgt.substring(verOffset + 1);
        if (browser.toLowerCase() == browser.toUpperCase()) {
          browser = navigator.appName;
        }
      }
      // trim the version string
      if ((ix = version.indexOf(";")) != -1) version = version.substring(0, ix);
      if ((ix = version.indexOf(" ")) != -1) version = version.substring(0, ix);
      if ((ix = version.indexOf(")")) != -1) version = version.substring(0, ix);

      majorVersion = parseInt("" + version, 10);
      if (isNaN(majorVersion)) {
        version = "" + parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion, 10);
      }

      // mobile version
      var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

      // cookie
      var cookieEnabled = navigator.cookieEnabled ? true : false;

      if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled) {
        document.cookie = "testcookie";
        cookieEnabled =
          document.cookie.indexOf("testcookie") != -1 ? true : false;
      }

      // system
      var os = unknown;
      var clientStrings = [
        { s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ },
        { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ },
        { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ },
        { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ },
        { s: "Windows Vista", r: /Windows NT 6.0/ },
        { s: "Windows Server 2003", r: /Windows NT 5.2/ },
        { s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ },
        { s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ },
        { s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ },
        { s: "Windows 98", r: /(Windows 98|Win98)/ },
        { s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ },
        {
          s: "Windows NT 4.0",
          r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/,
        },
        { s: "Windows CE", r: /Windows CE/ },
        { s: "Windows 3.11", r: /Win16/ },
        { s: "Android", r: /Android/ },
        { s: "Open BSD", r: /OpenBSD/ },
        { s: "Sun OS", r: /SunOS/ },
        { s: "Linux", r: /(Linux|X11)/ },
        { s: "iOS", r: /(iPhone|iPad|iPod)/ },
        { s: "Mac OS X", r: /Mac OS X/ },
        { s: "Mac OS", r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
        { s: "QNX", r: /QNX/ },
        { s: "UNIX", r: /UNIX/ },
        { s: "BeOS", r: /BeOS/ },
        { s: "OS/2", r: /OS\/2/ },
        {
          s: "Search Bot",
          r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/,
        },
      ];
      for (var id in clientStrings) {
        var cs = clientStrings[id];
        if (cs.r.test(nAgt)) {
          os = cs.s;
          break;
        }
      }

      var osVersion = unknown;

      if (/Windows/.test(os)) {
        osVersion = /Windows (.*)/.exec(os)[1];
        os = "Windows";
      }

      switch (os) {
        case "Mac OS X":
          osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
          break;

        case "Android":
          osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
          break;

        case "iOS":
          osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
          osVersion =
            osVersion[1] + "." + osVersion[2] + "." + (osVersion[3] | 0);
          break;
      }

      // flash (you'll need to include swfobject)
      /* script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js" */
      var flashVersion = "no check";
      if (typeof swfobject != "undefined") {
        var fv = swfobject.getFlashPlayerVersion();
        if (fv.major > 0) {
          flashVersion = fv.major + "." + fv.minor + " r" + fv.release;
        } else {
          flashVersion = unknown;
        }
      }

      window.deviceInfo = {
        screen: screenSize,
        browser: browser,
        browserVersion: version,
        browserMajorVersion: majorVersion,
        mobile: mobile,
        os: os,
        osVersion: osVersion,
        cookies: cookieEnabled,
        flashVersion: flashVersion,
      };
    }

    if (callback != null) callback(window.deviceInfo);

    return window.deviceInfo;
  }
}
