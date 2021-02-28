/* eslint-disable no-undef */

export default ({ router }) => {
  // Baidu Tongji integration
  if (
    process.env.NODE_ENV === "production" &&
    BA_ID &&
    typeof window !== "undefined"
  ) {
    window._hmt = window._hmt || [];
    (function () {
      var hm = document.createElement("script");
      hm.src = `https://hm.baidu.com/hm.js?${BA_ID}`;
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();

    router.afterEach(function (to) {
      _hmt.push(["_trackPageview", to.fullPath]);
    });
  }
};
