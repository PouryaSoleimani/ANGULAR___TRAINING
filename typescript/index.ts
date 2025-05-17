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
enum Categories {
  TOP,
  PANTS,
  SHOES,
  CAPS,
  SOCKS,
  GLOVES,
  JACKETS,
}

const myProduct: {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Categories;
  isSale: boolean;
} = {
  id: 1,
  title: 'ADIDAS T-SHIRT',
  price: 100,
  description: 'This is a product',
  category: Categories.GLOVES,
  isSale: true,
};

switch (myProduct.category) {
  case Categories.TOP:
    console.log('This is a TOP');
    break;
  case Categories.PANTS:
    console.log('This is a PANT}');
    break;
  case Categories.SHOES:
    console.log('This is a SHOE');
    break;
  case Categories.CAPS:
    console.log('This is a CAP');
    break;
  case Categories.SOCKS:
    console.log('This is a SOCK');
    break;
  case Categories.GLOVES:
    console.log('This is a GLOVE');
    break;
  case Categories.JACKETS:
    console.log('This is a JACKET');
    break;
  default:
    console.log('This is an UNKNOWN CATEGORY');
    break;
}
