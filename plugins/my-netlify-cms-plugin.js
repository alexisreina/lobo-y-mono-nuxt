import cms from "@/static/cms.json";
// sort portfolio by entry time using v1 uuids
// and link portolio items like in a linked list
const portfolio = Object.keys(cms.portfolio)
  // https://github.com/kelektiv/node-uuid/issues/75
  .sort((a, b) => {
    a = a.replace(/^(.{8})-(.{4})-(.{4})/, "$3-$2-$1");
    b = b.replace(/^(.{8})-(.{4})-(.{4})/, "$3-$2-$1");
    return a > b ? -1 : a < b ? 1 : 0;
  })
  .reduce((all, uuid, idx, arr) => {
    const first = 0;
    const last = arr.length - 1;

    all[uuid] = cms.portfolio[uuid];

    if (idx >= first) {
      const prev = arr[idx + 1];
      all[uuid].prev = cms.portfolio[prev];
    }

    if (idx <= last) {
      const next = arr[idx - 1];
      all[uuid].next = cms.portfolio[next];
    }

    // Link the first and last items
    // to create a circular list

    // if (idx === first) {
    //   const next = arr[last];
    //   all[uuid].next = cms.portfolio[next];
    // }
    //
    // if (idx === arr.length - 1) {
    //   const prev = arr[first];
    //   all[uuid].prev = cms.portfolio[prev];
    // }

    return all;
  }, {});

cms.portfolio = portfolio;

export default ({ app }, inject) => {
  inject("cms", cms);
};
