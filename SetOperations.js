function union(setA, setB) {
  return new Set([...setA, ...setB]);
}

function intersection(setA, setB) {
  return new Set(Array.from(setA).filter((n) => setB.has(n)));
}

function difference(setA, setB) {
  return new Set(Array.from(setA).filter((n) => !setB.has(n)));
}

function symmetricDifference(setA, setB) {
  return new Set([
    ...Array.from(setA).filter((n) => !setB.has(n)),
    ...Array.from(setB).filter((n) => !setA.has(n)),
  ]);
}

module.exports = {
  union,
  intersection,
  difference,
  symmetricDifference,
};
