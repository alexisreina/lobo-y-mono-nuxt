import cms from "@/static/cms.json";

// sort entries by creattion time using v1 uuids
const sortCollection = ({ cms, key, reverse }) => {
  const sortByUuidReverse = (a, b) => {
    a = a.replace(/^(.{8})-(.{4})-(.{4})/, "$3-$2-$1");
    b = b.replace(/^(.{8})-(.{4})-(.{4})/, "$3-$2-$1");
    return a > b ? -1 : a < b ? 1 : 0;
  };

  const sortByUuid = (a, b) => {
    a = a.replace(/^(.{8})-(.{4})-(.{4})/, "$3-$2-$1");
    b = b.replace(/^(.{8})-(.{4})-(.{4})/, "$3-$2-$1");
    return a < b ? -1 : a > b ? 1 : 0;
  };

  // sort the keys and generate a new object
  const sorted = Object.keys(cms[key])
    .sort(reverse ? sortByUuidReverse : sortByUuid)
    .reduce((all, uuid) => {
      all[uuid] = cms[key][uuid];
      return all;
    }, {});

  return sorted;
};

// link entries like in a linked list
const linkCollection = ({ cms, key }) => {
  const linked = Object.keys(cms[key]).reduce((all, uuid, idx, arr) => {
    const first = 0;
    const last = arr.length - 1;

    all[uuid] = cms[key][uuid];

    if (idx >= first) {
      const prev = arr[idx + 1];
      all[uuid].prev = cms[key][prev];
    }

    if (idx <= last) {
      const next = arr[idx - 1];
      all[uuid].next = cms[key][next];
    }

    return all;
  }, {});

  return linked;
};

// this are my collections
const collections = [
  { key: "portfolio", reverse: true, link: true },
  { key: "partners", reverse: false, link: false },
  { key: "reviews", reverse: false, link: false },
  { key: "artists", reverse: false, link: false }
];

// sort and link my collections
collections.forEach(({ key, reverse, link }) => {
  // replace collection with the sorted version
  cms[key] = sortCollection({ cms, key, reverse });

  // replace collection with the linked version
  if (link) {
    cms[key] = linkCollection({ cms, key });
  }
});

export default ({ app }, inject) => {
  inject("cms", cms);
};
