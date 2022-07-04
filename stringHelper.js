export function capitalize(str = "") {
  const first = str[0].toUpperCase();
  const end = str.substring(1);
  return first + end;
}

export function reverseString(str = "") {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

export function caesarCipher(str = "", shiftAmount = 0) {
  let cipher = "";
  const shift = (charCode, from = 0) => {
    charCode -= from;
    charCode += shiftAmount;
    // 26 letters 0-25
    charCode %= 26;
    return (charCode += from);
  };
  const charcodes = str.split("").map((char) => {
    let charCode = char.charCodeAt(0);
    if (char.match(/[a-z]/)) {
      charCode = shift(charCode, "a".charCodeAt(0));
    } else if (char.match(/[A-Z]/)) {
      charCode = shift(charCode, "A".charCodeAt(0));
    }
    return charCode;
  });
  return String.fromCharCode(...charcodes);
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      charCode = shift(charCode, 65);
    } else if (charCode >= 97 && charCode <= 122) {
      charCode = shift(charCode, 97);
    }
    cipher += String.fromCharCode(charCode);
  }
  return cipher;
}
