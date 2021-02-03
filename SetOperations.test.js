const {
  union,
  intersection,
  difference,
  symmetricDifference,
} = require("./SetOperations");
const {
  SET_A,
  SET_B,
  SET_A_U_SET_B,
  SET_A_I_SET_B,
  SET_A_D_SET_B,
  SET_A_S_SET_B,
} = require("./TestConstants");

test("union", () => {
  expect(union(SET_A, SET_B)).toStrictEqual(SET_A_U_SET_B);
});

test("intersection", () => {
  expect(intersection(SET_A, SET_B)).toStrictEqual(SET_A_I_SET_B);
});

test("difference", () => {
  expect(difference(SET_A, SET_B)).toStrictEqual(SET_A_D_SET_B);
});

test("symmetric difference", () => {
  expect(symmetricDifference(SET_A, SET_B)).toStrictEqual(SET_A_S_SET_B);
});
