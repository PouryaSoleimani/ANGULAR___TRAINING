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
enum ProductShippingStatus {
  PENDING,
  SENT,
  DELIVERED,
}
const usersOrder: {
  id: number;
  status: ProductShippingStatus;
  totalPrice: number;
  numberOfProducts: number;
  productName: string;
  userInfos: { name: string; age: number; address: string };
} = {
  id: 1,
  status: ProductShippingStatus.SENT,
  totalPrice: 1500,
  numberOfProducts: 5,
  productName: 'Laptop',
  userInfos: { name: 'Pourya', age: 25, address: 'Iran' },
};
if (usersOrder.status === ProductShippingStatus.PENDING) {
  console.log('⌛ YOUR PRODUCT IS PENDING');
} else if (usersOrder.status === ProductShippingStatus.SENT) {
  console.log('🚚 YOUR PRODUCT IS SENT');
} else {
  console.log('✅ YOUR PRODUCT IS DELIVERED');
}
