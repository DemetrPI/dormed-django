const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}
// Note from the docs -> Warning: The arguments passed to require.context must be literals!
importAll(
  require.context("../../static/images/rooms/", false, /\.(png|jpe?g|svg)$/)
);

const images = Object.entries(cache).map((module) => module[1].default);

const rooms = [];

for (var i in images) {
  rooms.push({
    key: i,
    original: images[i],
    thumbnail: images[i],
    originalAlt: "Villa Dorota rooms",
  });
}

export { rooms };
