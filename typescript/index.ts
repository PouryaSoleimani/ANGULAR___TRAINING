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

//^ ARRAYS
const myHobbies = ['Sports', 'Cooking', 'Coding'];

for (const hobby of myHobbies) {
  console.log(hobby);
}
console.log(myHobbies);
console.log(myHobbies.map((hobby) => hobby.toUpperCase()));

let exampleArray = [1, 5, 'HELLO', false];
exampleArray[0] = true;
exampleArray[1] = 'REZA';
exampleArray[2] = 10;

//  TUPLES --> Cannot use other value types instead of the specified types
let tupleExample: [string, number, boolean] = ['hello', 10, true];
tupleExample[0] = 'world';

console.info(tupleExample);

let tupleExample2: [number, string, boolean, number] = [20, 'pourya', true, 30];
console.info('TUPLE 1', tupleExample2);
tupleExample2 = [50, 'ali', false, 40];
console.info('TUPLE 2', tupleExample2);

// ENUMS --> Enum is a special "class" that represents a group of constants (unchangeable variables).
enum Roles {
  ADMIN,
  READ_ONLY,
  AUTHOR,
  TEACHER,
  USER,
}

let person: {
  name: string;
  age: number;
  isMale: boolean;
  hobbies: string[];
  role: Roles;
} = {
  name: 'Pourya',
  age: 25,
  isMale: true,
  hobbies: ['Sports', 'Cooking'],
  role: Roles.AUTHOR,
};

if (person.role === Roles.ADMIN) {
  console.log('USER IS AN ADMIN');
} else if (person.role === Roles.READ_ONLY) {
  console.log('USER IS NOT AN ADMIN , ITS READ ONLY');
} else if (person.role === Roles.AUTHOR) {
  console.log('USER IS AN AUTHOR');
} else if (person.role === Roles.TEACHER) {
  console.log('USER IS AN TEACHER');
} else if (person.role === Roles.USER) {
  console.log('USER IS AN USER');
} else {
  console.log('USER IS AN UNKNOWN');
}
