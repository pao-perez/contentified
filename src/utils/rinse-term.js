const rinseTerm = (term = '') => {
  const chars = [];
  for (let c = 0; c < term.length; c += 1) {
    const utf16CharCode = term.charCodeAt(c);
    const numeric = utf16CharCode > 47 && utf16CharCode < 58;
    const uppercaseLetter = utf16CharCode > 64 && utf16CharCode < 91;
    const lowercaseLetter = utf16CharCode > 96 && utf16CharCode < 123;
    if (numeric || uppercaseLetter || lowercaseLetter) {
      chars.push(term.charAt(c));
    }
  }
  return chars.length > 0 ? chars.join('') : null;
};

export default rinseTerm;
