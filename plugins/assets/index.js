// import CONFIG from "web.config";
// import framework from "diginext.json";

// TODO: Update plugins/assets

const asset = (src) => {
  // console.log(CONFIG.NEXT_PUBLIC_CDN_BASE_PATH);
  // console.log(framework);

  //   let isEnabledCDN = false;
  //   if (CONFIG.environment == "production") {
  //     isEnabledCDN = framework.cdn.prod;
  //   } else if (CONFIG.environment == "staging") {
  //     isEnabledCDN = framework.cdn.staging;
  //   } else if (CONFIG.environment == "development") {
  //     isEnabledCDN = framework.cdn.dev;
  //   } else {
  //     isEnabledCDN = false;
  //   }

  let isEnableBasePath = false;
  //   if (isEnabledCDN == false && CONFIG.NEXT_PUBLIC_BASE_PATH) {
  //     isEnableBasePath = true;
  //   }

  // if (isEnabledCDN) {
  // return CONFIG.NEXT_PUBLIC_CDN_BASE_PATH + "/public" + src;
  //   return "/public" + src;
  // } else {
  if (isEnableBasePath) {
    //   return "/" + CONFIG.NEXT_PUBLIC_BASE_PATH + src;
    return "/" + "" + src;
  } else {
    return src;
  }
  // }
};

export default asset;
