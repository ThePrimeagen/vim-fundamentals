function splitSections(str) {
  const validSectionTest = /^\d+[A-Z]+$/;
  const numbersRegex = /^\d+/;
  const lettersRegex = /[A-Z]+$/;
  if (!validSectionTest.test(str)) {
    throw new Error(
      `${str} does not match the section format. It must be <numbers><capital letters>, like 16A or 5F (case sensitive)`
    );
  }

  return [numbersRegex.exec(str)[0], lettersRegex.exec(str)[0]];
}

const getCharScore = str =>
  str
    .split("")
    .map((char, index) => char.charCodeAt(0) * 10 ** index)
    .reduce((acc, score) => acc + score);

function sorter(a, b) {
  const [aSec, aSub] = splitSections(a.attributes.order);
  const [bSec, bSub] = splitSections(b.attributes.order);

  // sections first
  if (aSec !== bSec) {
    return aSec - bSec;
  }

  // subsections next
  return getCharScore(aSub) - getCharScore(bSub);
}

module.exports.splitSections = splitSections;
module.exports.sorter = sorter;
