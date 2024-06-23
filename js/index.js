// forEach metodiga oid masalalar

// 1-masala

// function ikkigaKopaytirish(sonlar) {
//     return sonlar.forEach(function (son) {
//         let natija = son * 2;
//         console.log(natija);
//     });
// }

// let sonlar = [3, 7, 11, 5, 9];
// console.log(ikkigaKopaytirish(sonlar));

// 2-masala

// function kattaHarfgaAylantir(arr) {
//     arr.forEach(function (value) {
//         let natija = value.toUpperCase();
//         console.log(natija);
//     });
// }
// console.log(kattaHarfgaAylantir([`apple`, `banana`, `cherry`]));

// 3-masala

// function songaBeshQosh(arr) {
//     arr.forEach(function (value) {
//         let result = value + 5;
//         console.log(result);
//     });
// }

// console.log(songaBeshQosh([5, 6, 7, 8 ,9, 10]));

// 4-masala

// function ismniBahoniChiqarish(ismiBali) {

// talabalar.forEach(function(talaba) {
//     console.log(`${talaba.ism}: ${talaba.bahosi}`);
// });

// }
// talabalar = [
//     { ism: 'Ali', bahosi: 85 },
//     { ism: 'Vali', bahosi: 92 },
//     { ism: 'Hasan', bahosi: 78 }
// ]

// console.log(ismniBahoniChiqarish(talabalar));

// Map metodiga oid masalalar

// 1-masala

// function ikkigaKopaytir(arr) {
//     let result;
//     arr.map(function (value) {
//         result = value * 2;
//         console.log(result);
//     })
// }

// console.log(ikkigaKopaytir([1, 2, 3, 4, 5]));

// 2-masala

// function kattaHarfgaAylantir(arr) {
//     arr.map(function (value) {
//         let result = value.toUpperCase();
//         console.log(result);
//     })
// }
// console.log(kattaHarfgaAylantir([`apple`, `banana`, `cherry`]));

// 3-masala

// function beshniQoshish(arr) {
//     arr.map(function (value) {
//         let result = value + 5;
//         console.log(result);
//     })
// }

// console.log(beshniQoshish([10, 15, 20]));

// 4-masala

// function bahoniKotarish(students) {
//     let newGrades = students.map((student) => {
//         let increasedGrade = student.grade + 10;
//         return {
//             name: student.name,
//             grade: increasedGrade
//         };
//     });

//     return newGrades;
// }

// let students = [
//     { name: 'Ali', grade: 85 },
//     { name: 'Vali', grade: 92 },
//     { name: 'Hasan', grade: 78 }
// ];

// console.log(bahoniKotarish(students));

// filter metodiga oid masalalar

// 1-masala

// function filterNumbers(numbers) {
//     let evenNumbers = numbers.filter(function (number) {
//         return number % 2 === 0;
//     } );

//     return evenNumbers;
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let evenNumbers = filterNumbers(numbers);

// console.log(evenNumbers);

// 2-masala

// function filterLongWords(words) {
//     let longWords = words.filter(function (word) {
//         return word.length > 5;
//     });

//     return longWords;
// }

// let words = ['apple', 'banana', 'cherry', 'date'];
// console.log(filterLongWords(words));

// 3-masala

// function filterAges(ages) {
//     let result = ages.filter(function (age) {
//         return age > 18;
//     })
//     return result;
// }

// console.log(filterAges([18, 19, 23, 34, 54]));

// 4-masala

// function filterGradeOfStudents(students) {
//     let topStudents = students.filter(function (student) {
//         return student.grade > 80;
//     });

//     return topStudents;
// }

// let students = [
//     { name: 'Ali', grade: 85 },
//     { name: 'Vali', grade: 92 },
//     { name: 'Hasan', grade: 78 },
//     { name: 'Husan', grade: 88 }
// ];

// let highAchievers = filterGradeOfStudents(students);

// console.log(highAchievers);

// find metodiga oid masalalar

// 1-masala

// function numbersUpTen(numbers) {
//     let result = numbers.find(function (number) {
//         return number > 10;
//     })
//     return result;
// }

// console.log(numbersUpTen([11, 12, 3, 2, 4]));

// 2-masala

// function findGradeOfStudents(students) {
//     let topStudents = students.find(function (student) {
//         return student.grade > 85;
//     });

//     return topStudents;
// }

// let students = [
//     { name: 'Ali', grade: 85 },
//     { name: 'Vali', grade: 92 },
//     { name: 'Hasan', grade: 78 },
//     { name: 'Husan', grade: 88 }
// ];

// console.log(findGradeOfStudents(students));

// some/every metodiga oid masalalar

// 1-masala

// function musbatSonniAniqlash(numbers) {
//     let result = numbers.some(function (number) {
//         return number > 0;
//     })
//     return result;
// }

// console.log(musbatSonniAniqlash([1, -2, 3, 4]));

// 2-masala

// function longWords(numbers) {
//     let result = numbers.some(function (number) {
//         return number.length > 5;
//     })
//     return result;
// }
// const words = ['cat', 'dog', 'elephant'];
// console.log(longWords(words));

// 3-masala

// function musbatSonniAniqlash(numbers) {
//     let result = numbers.every(function (number) {
//         return number > 0;
//     })
//     return result;
// }

// console.log(musbatSonniAniqlash([1, -2, 3, 4]));

// 4-masala

// function checkGradeOfStudents(students) {
//     let topStudents = students.every(function (student) {
//         return student.grade > 50;
//     });

//     return topStudents;
// }

// let students = [
//     { name: 'Ali', grade: 85 },
//     { name: 'Vali', grade: 92 },
//     { name: 'Hasan', grade: 78 },
//     { name: 'Husan', grade: 88 }
// ];

// console.log(checkGradeOfStudents(students));

// String metodlariga oid masalalar

// 1-masala

// function findSecondLetterOfTheWord(words) {
//     for (const iterator of words) {
//         return iterator.charAt(1);
//     }
// }

// console.log(findSecondLetterOfTheWord([`hello`]));

// 2-masala

// function findSecondLetterOfTheWord(words) {
//     for (const iterator of words) {
//         return iterator.charCodeAt(1);
//     }
// }

// console.log(findSecondLetterOfTheWord([`hello`]));

// 3-masala

// function ikkiMatnniBirlashtirish(text1, text2) {
//     return text1.concat(text2);
// }
// console.log(ikkiMatnniBirlashtirish(`salom`, ` xayr`));

// 4-masala

// function includesInString(text, element) {
//     return text.includes(element);
// }

// console.log(includesInString([`saloom`, `xayr`], `bye`));

// 5-masala

// function endsWithInString(text, element) {
//     return text.endsWith(element);
// }

// console.log(endsWithInString(`Hello world!`, `ld!`));

// 6-masala

// function indexOfInString(text, element) {
//     return text.indexOf(element);
// }

// console.log(indexOfInString(`hello world hello!`, `hello`));

// 7-masala

// function lastIndexOfInString(text, element) {
//     return text.lastIndexOf(element);
// }

// console.log(lastIndexOfInString(`hello world hello!`, `hello`));

// 8-masala

// function findAllNumbers(text) {

//     let numbers = text.match(/\d+/g);

//     return numbers;
// }

// let text = "My phone number is +998 90.408-78-03";

// let foundNumbers = findAllNumbers(text);

// console.log(foundNumbers);

// 9-masala

// function repeatText(text, count) {

//     let repeatedText = text.repeat(count);

//     return repeatedText;
// }

// let originalText = "Hello, world! ";

// let repeatCount = 3;

// console.log(repeatText(originalText, repeatCount));

// 10-masala

// function replaceWord(text, oldWord, newWord) {
//     let replacedText = text.replace(oldWord, newWord);

//     return replacedText;
// }

// let originalText = "I have TOYOTA";

// let oldWord = "TOYOTA";
// let newWord = "BMW";

// let newText = replaceWord(originalText, oldWord, newWord);

// console.log(newText);

// 11-masala

// function findSubstringIndex(text, substring) {
//     let index = text.indexOf(substring);
//     return index;
// }

// let matn = "Bu bir matn misol matn";
// let qidirilayotganSoz = "matn";

// console.log(findSubstringIndex(matn, qidirilayotganSoz));

// 12-masala

// function sliceText(text, start, end) {
//     let slicedText = text.slice(start, end);
//     return slicedText;
// }

// let matn = "Bu bir matn misol matn";

// let boshlanishIndeksi = 3;
// let tugashIndeksi = 11;
// console.log(sliceText(matn, boshlanishIndeksi, tugashIndeksi));

// 13-masala

// function splitBySpace(text) {
//     let arr = text.split(' ');
//     return arr;
// }

// let matn = "Men Olimov Oltinbekman";

// let ajratilganMassiv = splitBySpace(matn);

// console.log(ajratilganMassiv);

// 14-masala

function startsWith(text, word) {
    return text.startsWith(word);
}

let text = "Men oltinbekman";
let soz = "Men";

console.log(startsWith(text, soz));

