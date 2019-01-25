import cms from "@/static/cms.json";

export default ({ app }, inject) => {
  inject("cms", cms);
};
