import { capitalize, reverseString, caesarCipher } from "./stringHelper";

const strings = ["STRING", "sTRING", "string", "-tring"];

test("capitalize string", () => {
  strings.forEach((str) => {
    expect(capitalize(str)).toMatch(/^[^a-z]/);
  });
});

test("reverseString", () => {
  expect(reverseString("reverse")).toBe("esrever");
});

test("caesarCipher shift by one", () => {
  expect(caesarCipher("A quick brown fox jumps over the lazy dog!?", 1)).toBe(
    "B rvjdl cspxo gpy kvnqt pwfs uif mbaz eph!?"
  );
});

test("caesarCipher no shift", () => {
  expect(caesarCipher("A quick brown fox jumps over the lazy dog!?", 0)).toBe(
    "A quick brown fox jumps over the lazy dog!?"
  );
});
