const circleArea = (r) => {
  if (r) {
    console.log(3.14 * (r * r));
    return;
  }
  console.log("Bir deger girin");
};

const circleCircumference = (r) => {
  if (r) {
    console.log(2 * (3.14 * r));
    return;
  }
  console.log("Bir deger girin");
};

module.exports = {
  circleArea,
  circleCircumference,
};
