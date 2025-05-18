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
  CANCELLED,
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
  status: ProductShippingStatus.DELIVERED,
  totalPrice: 1500,
  numberOfProducts: 5,
  productName: 'Laptop',
  userInfos: { name: 'Pourya', age: 25, address: 'Iran' },
};
if (usersOrder.status === ProductShippingStatus.PENDING) {
  console.log('⌛ YOUR PRODUCT IS PENDING');
} else if (usersOrder.status === ProductShippingStatus.SENT) {
  console.log('🚚 YOUR PRODUCT IS SENT');
} else if (usersOrder.status === ProductShippingStatus.CANCELLED) {
  console.log('❌ YOUR PRODUCT IS CANCELLED');
} else if (usersOrder.status === ProductShippingStatus.DELIVERED) {
  console.log('✅ YOUR PRODUCT IS DELIVERED');
} else {
  console.log('❓ YOUR PRODUCT IS UNKNOWN , PLEASE CONTACT CUSTOMER SUPPORT');
}

//x UNION TYPES --> A union type is a type formed from two or more other types, representing values that may be any one of those types.

// We use the | symbol to separate each type.
type Combinable = number | string;

function combine(input1: Combinable, input2: Combinable) {
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    const result = input1 + input2;
    return result;
  } else {
    const result = input1.toString() + input2.toString();
    return result;
  }
}

const combinedAges = combine(30, 26);
console.log('AGES ===> ', combinedAges);

const combinedNames = combine('Pourya', 'Soleimani');
console.log('NAMES ===> ', combinedNames);

// LITERALS TYPES --> A literal type is a type that is known to be one of a specific set of values.
function combine2(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {
  let result: number | string;
  if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + ' ' + input2.toString();
  }
  return result;
}
console.log('%c NUMBER OUTPUT ====> ', 'color : hotpink', combine2(30, 26, 'as-number'));
console.log('%c TEXT OUTPUT ====>', 'color : cornflowerblue', combine2('Pourya', 'Soleimani', 'as-text'));
