// commonjs so it can be shared with csv.js
module.exports = (a, b) => {
  console.log("sort", a, b);
  const [aSection, aLesson] = a.order.split(".");
  const [bSection, bLesson] = b.order.split(".");

  if (aSection !== bSection) {
    return aSection - bSection;
  }

  return aLesson.charCodeAt() - bLesson.charCodeAt();
};
