//1. Написать функцию, которая на вход принимает целое число и возвращает факториал
//этого числа.
   function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  console.log( factorial(7) ); 

  
  //2. Написать функцию, которая на вход принимает строку и возвращает длину самого
  //длинного слова в этой строке.
  function findLongestWord(str) {
    var longestWord = str.split(' ').reduce(function(longest, currentWord) {
      return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord.length;
  }
  console.log("2)");
  console.log(findLongestWord("Therrr quickrrr brown foxxxx jumpedууу over the lazyyyy dog")); 
   
  
  //3. Написать функцию, которая на вход принимает массив, состоящий из массивов
  //целых чисел (например: [[1, 2, 3], [4, 5], [6, 7, 8, 9]]) и возвращает массив
  //состоящий из наибольшего числа каждого предоставленного подмассива.
  function arrayOfLargestNum(mas){
    return mas.map(m => Math.max.apply(null, m));
  }
  
  console.log("3)");
  
  console.log(arrayOfLargestNum([[1, 2, 3], [4, 5], [6, 7, 8, 9]]));

  //4. Написать функцию, которая на вход принимает строку и целое число
  //и обрезает строку (первый аргумент), если она длиннее заданной
  //максимальной длины строки (второй аргумент) и возвращает обрезанную строку с «…»
  //в конце.
  function shortWord(str, number){
    return str.length > number? str.slice(0, number-1) + "....": str;
  }
  console.log("4)");
  console.log(shortWord("пример", 5));
  
  //5. Написать функцию, которая на вход принимает строку и возвращает эту строку в
  //формате: каждое слово начинается с заглавной буквы, остальные в нижнем регистре.
  function wordsUpperCase(str){
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
  console.log("5)");
  console.log(wordsUpperCase("Даже если вы подходите, это не значит, что вы на своем месте."));
  
  //6. Написать функцию, которая на вход принимает два массива и целое число n. Функция
  //должна скопировать каждый элемент первого массива во второй по порядку начиная с
  //индекса n второго массива и вернуть полученный массив. Входные массивы не должны
  //изменяться. (например: при входных данных ([1, 2, 3], [4, 5], 1) должно вернуться
  // [4, 1, 2, 3, 5].
  function copyArray(m1, m2, n){
    arr=[];
    return arr.concat(m2.slice(0, n), m1, m2.slice(n, m2.length));
  }
  
  console.log("6)");
  console.log(copyArray([1, 2, 3], [4, 5], 1));
  
  //7. Написать функцию, которая на вход принимает массив и удаляет в нем все "ложные
  //значения"
  
    function trueData(m){return m.filter(Boolean);
   }
   console.log("7)");
   console.log(trueData([232, '', null, 'JavaScript', undefined, 0]));



//    var strs = ['Hello', ',', 'JavaScript', 'World', '!'];
// var data = filter(strs, function(str) {
//   return str.toLowerCase() !== str;
// });
  
  //8. Написать функцию, которая на вход принимает массив, состоящий из двух строк.
  //Функция должна вернуть true, если строка в первом элементе массива содержит все
  //буквы строки во втором элементе массива (регистр игнорируется).
  function stringLetters(mas){
    return mas[1].toUpperCase().split('')
              .every(val => mas[0].toUpperCase().split('').includes(val));
  }
  
  console.log("8)");
  console.log(stringLetters(["кееееsdfееек", "кееееsdfееек"]));
  
  //9. Написать функцию которая на вход принимает массив и целое число. Функция должна
  //разбить массив (первый аргумент) на группы длиной size (второй агрумент) и вернуть их
  //в виде двумерного массива.
  function splitArray(mass, size){
    while(mass.length)
      arr.push(mass.splice(0, size));
    return arr;
  }
  
  console.log("9)");
  console.log(splitArray([1,2,3,4,5,6],2))
  
  //10. Используя рекурсию (без использования циклов). Написать функцию, которая
  //принимает массив и целое число (n) и заполняет массив числами от n до 1.
  function element(mas, n){
    mas.push(n);
    if (n>1) element(mas, n-1);
  }
  
  console.log("10)");
  massiv = [];
  element(massiv,1);
  console.log(massiv);
