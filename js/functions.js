
const stringLength = function (string, line) {
  console.log(string.length <= line);
};

stringLength('qwerty', 5);

const polindrome = function (string) {
  const register = string.toLowerCase();
  const normolizedString = register.replaceAll(' ', '');
  let reverse = '';

  for (let i = normolizedString.length - 1; i >= 0; i--) {
    reverse += normolizedString[i];
  }
  return normolizedString === reverse;
};

console.log(polindrome('Лёша на полке клопа нашёл '));

