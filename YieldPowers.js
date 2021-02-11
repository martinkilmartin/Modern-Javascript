function* powers(b) {
  let i = b;
  while (true) {
    yield i;
    i*=b;
  }
}

function yieldPower(base, exponent) {
  const iterable = powers(base)[Symbol.iterator]();
  let exponentiation;
  for (let i = 0; i < exponent; i++) {
    exponentiation = iterable.next().value;
  }
  return exponentiation;
}

module.exports = {
  powers,
  yieldPower,
};
