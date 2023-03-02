/* eslint-disable no-unused-vars */
//Функция для проверки длины строки.
const isLengthString = (string, length) => string.length <= length;

//Функция для проверки, является ли строка палиндромом.
const isPalindrom = (string) => {
  const lowerString = string
    .toLowerCase()
    .replaceAll(' ', '');
  let reverseString = '';
  for (let i = lowerString.length - 1; i >= 0; i--) {
    reverseString += lowerString.at(i);
  }
  return lowerString === reverseString;
};

//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
//и возвращает их в виде целого положительного числа.
const extractNumber = (string) => {
  if (typeof string === 'number') {
    return string;
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};

/*Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает
исходную строку, дополненную указанными символами до заданной длины.*/
const createAdress = (string, minLength, additionalSymbols) => {
  const actualSymbols = minLength - string.length;
  if (actualSymbols <= 0) {
    return string;
  }
  return additionalSymbols.slice(0, actualSymbols % additionalSymbols.length) + additionalSymbols.repeat(actualSymbols / additionalSymbols.length) + string;
};
