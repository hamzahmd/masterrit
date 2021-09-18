export const generateArrayOfYears = () => {
  var max = new Date().getFullYear();
  var min = max - 100;
  var years = [];

  for (var i = max; i >= min; i--) {
    years.push(i);
  }
  return years;
};
