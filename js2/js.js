// Добовление значений  к key and  value
function map(object, reducer) {
      return Object.entries(object).reduce(reducer, {})  
  }
  
  const result = map({ name: 'Саша', age: 23 }, (object, [key, value]) => {
  
      object[key + " man"] = value + "  как дела?";
  
      return object
  
  });
  
   
  console.log((1));
  console.log(result);
  

// проверяет наличие в массиве элемента, который больше 10.
function isBiggerThan10(element, index, array) {
    return element > 10;
  }
  [2, 5, 8, 1, 4].some(isBiggerThan10);  // false
  [12, 5, 8, 1, 4].some(isBiggerThan10); // true    
 

  // some  так можно сделать  проверку на админа 
//   let hasAdmin = users.some(user => user.group === 'admin');

// Поиск по реестру 

let users = [
  { id: 11, name: 'MIsha', age: 23, group: 'editor' },
  { id: 47, name: 'Ilya', age: 28, group: 'admin' },
  { id: 85, name: 'Sveta', age: 34, group: 'editor' },
  { id: 97, name: 'Sacha', age: 28, group: 'admin' }
];
let res = users.filter(it => it.name.includes('vet'));
