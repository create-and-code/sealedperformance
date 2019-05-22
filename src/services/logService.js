// import Raven from "raven-js";

function init() {
  // Raven.config("https://35fd3df55887420fb126604447ee4905@sentry.io/1408335", {
  //   release: "1-0-0",
  //   environment: "development-test"
  // }).install();
}

function log(error) {
  console.log(error);
  // Raven.captureException(error);
}

export default {
  init,
  log
};
