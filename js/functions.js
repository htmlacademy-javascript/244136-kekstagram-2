
const stringLength = function (string, line) {
  console.log(string.length >= line);
};

stringLength('qwertyqwerty', 30);

const polindrome = function (string) {
  const normolizedString = string.toLowerCase().replaceAll(' ', '');
  let reverse = '';

  for (let i = normolizedString.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return normolizedString === reverse;
};

console.log(polindrome('доводw'));

