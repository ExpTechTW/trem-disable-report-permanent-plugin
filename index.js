module.exports = function (ctx) {
  ctx.on("load", () => {
    const { TREM } = ctx;
    TREM.constant.SHOW_REPORT = false;
  });
};
