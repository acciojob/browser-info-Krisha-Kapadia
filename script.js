//your JS code here. If required.
function getBrowserInfo() {
      const userAgent = navigator.userAgent;
      let browserName = navigator.appName;
      let version = navigator.appVersion;

      // Basic detection for modern browsers
      if (userAgent.indexOf("Firefox") > -1) {
        browserName = "Mozilla Firefox";
        version = userAgent.match(/Firefox\/([\d.]+)/)[1];
      } else if (userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Edg") === -1) {
        browserName = "Google Chrome";
        version = userAgent.match(/Chrome\/([\d.]+)/)[1];
      } else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1) {
        browserName = "Apple Safari";
        version = userAgent.match(/Version\/([\d.]+)/)[1];
      } else if (userAgent.indexOf("Edg") > -1) {
        browserName = "Microsoft Edge";
        version = userAgent.match(/Edg\/([\d.]+)/)[1];
      } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
        browserName = "Opera";
        version = userAgent.match(/(Opera|OPR)\/([\d.]+)/)[2];
      }

      const message = `You are using ${browserName} version ${version}`;
      document.getElementById("browser-info").innerText = message;
    }

    // Run when DOM is ready
    document.addEventListener("DOMContentLoaded", getBrowserInfo);