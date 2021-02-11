const { yieldPower } = require("./YieldPowers");
const {
  POW_1_1,
  POW_1_2,
  POW_1_3,
  POW_2_1,
  POW_2_2,
  POW_2_3,
  POW_2_32,
  POW_2_52,
  POW_3_5,
  POW_5_3,
  POW_5_7,
  POW_6_6,
  POW_7_3,
  POW_12_12,
} = require("./TestConstants");

test("1**1", () => {
  expect(yieldPower(1, 1)).toStrictEqual(POW_1_1);
});

test("1**2", () => {
  expect(yieldPower(1, 1)).toStrictEqual(POW_1_2);
});

test("1**3", () => {
  expect(yieldPower(1, 1)).toStrictEqual(POW_1_3);
});

test("2**1", () => {
  expect(yieldPower(2, 1)).toStrictEqual(POW_2_1);
});

test("2**2", () => {
  expect(yieldPower(2, 2)).toStrictEqual(POW_2_2);
});

test("2**3", () => {
  expect(yieldPower(2, 3)).toStrictEqual(POW_2_3);
});

test("2**32", () => {
  expect(yieldPower(2, 32)).toStrictEqual(POW_2_32);
});

test("2**52", () => {
  expect(yieldPower(2, 52)).toStrictEqual(POW_2_52);
});


test("3**5", () => {
  expect(yieldPower(3, 5)).toStrictEqual(POW_3_5);
});

test("5**3", () => {
  expect(yieldPower(5, 3)).toStrictEqual(POW_5_3);
});

test("5**7", () => {
  expect(yieldPower(5, 7)).toStrictEqual(POW_5_7);
});

test("6**6", () => {
  expect(yieldPower(6, 6)).toStrictEqual(POW_6_6);
});

test("7**3", () => {
  expect(yieldPower(7, 3)).toStrictEqual(POW_7_3);
});

test("12**12", () => {
  expect(yieldPower(12, 12)).toStrictEqual(POW_12_12);
});
