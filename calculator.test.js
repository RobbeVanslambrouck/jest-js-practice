import { add, subtract, divide, multiply, analyzeArray } from "./calculator";

test("add postive numbers", () => {
  expect(add(2, 4)).toBe(6);
});
test("add negative numbers", () => {
  expect(add(2, -4)).toBe(-2);
});

test("subtract postive numbers", () => {
  expect(subtract(4, 2)).toBe(2);
});
test("subtract negative numbers", () => {
  expect(subtract(-4, 2)).toBe(-6);
});

test("divide postive numbers", () => {
  expect(divide(4, 2)).toBe(2);
});
test("divide negative numbers", () => {
  expect(divide(-4, 2)).toBe(-2);
});

test("multiply postive numbers", () => {
  expect(multiply(2, 4)).toBe(8);
});
test("multiply negative numbers", () => {
  expect(multiply(2, -4)).toBe(-8);
});

test("analyzeArray all postive numbers", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("analyzeArray all negative numbers", () => {
  expect(analyzeArray([-1, -8, -3, -4, -2, -6])).toEqual({
    average: -4,
    min: -8,
    max: -1,
    length: 6,
  });
});

test("analyzeArray fractions", () => {
  expect(analyzeArray([1, 7.5, 3, 4, 2, 6]).average).toBeCloseTo(3.9166);
  expect(analyzeArray([1, 7.5, 3, 4, 2, 6]).max).toBe(7.5);
});
