export default ({ app }, inject) => {
  inject("cms", require("@/static/cms.json"));
};
