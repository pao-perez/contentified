const flush = (out = [], term = []) => {
  if (term.length > 0) {
    out.push(term.join(''));
  }
};

const splitTerm = (term = '') => {
  const terms = [];
  let chars = [];
  [...term].forEach((char) => {
    if (char === ' ') {
      flush(terms, chars);
      chars = [];
    } else {
      chars.push(char);
    }
  });

  flush(terms, chars);

  return terms;
};

export default splitTerm;
