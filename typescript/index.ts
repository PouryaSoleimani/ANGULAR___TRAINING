console.log('hello world');

function myNameLogger(name: string) {
  console.log(name);
}

myNameLogger('Pourya Soleimani');

function add(num1: number, num2: number, isShow: boolean, resultText: string) {
  const result = num1 + num2;

  if (isShow) {
    return resultText + ' ' + result;
  } else {
    return 'Return is Restricted';
  }
}
console.log(add(5, 2, true, 'RESULT IS'));

const myHobbies = ['Sports', 'Cooking', 'Coding'];

for (const hobby of myHobbies) {
  console.log(hobby);
}
console.log(myHobbies);
console.log(myHobbies.map((hobby) => hobby.toUpperCase()));
