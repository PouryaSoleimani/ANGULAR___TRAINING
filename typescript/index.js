console.log('hello world');
function myNameLogger(name) {
    console.log(name);
}
myNameLogger('Pourya Soleimani');
function add(num1, num2, isShow, resultText) {
    var result = num1 + num2;
    if (isShow) {
        return resultText + ' ' + result;
    }
    else {
        return 'Return is Restricted';
    }
}
console.log(add(5, 2, true, 'RESULT IS'));
// ARRAYS
var myHobbies = ['Sports', 'Cooking', 'Coding'];
for (var _i = 0, myHobbies_1 = myHobbies; _i < myHobbies_1.length; _i++) {
    var hobby = myHobbies_1[_i];
    console.log(hobby);
}
console.log(myHobbies);
console.log(myHobbies.map(function (hobby) { return hobby.toUpperCase(); }));
var exampleArray = [1, 5, 'HELLO', false];
exampleArray[0] = true;
exampleArray[1] = 'REZA';
exampleArray[2] = 10;
// TUPLES --> Cannot use other value types instead of the specified types
var tupleExample = ['hello', 10, true];
tupleExample[0] = 'world';
console.info(tupleExample);
var tupleExample2 = [20, 'pourya', true, 30];
console.info('TUPLE 1', tupleExample2);
tupleExample2 = [50, 'ali', false, 40];
console.info('TUPLE 2', tupleExample2);
// ENUMS --> Enum is a special "class" that represents a group of constants (unchangeable variables).
var ProductShippingStatus;
(function (ProductShippingStatus) {
    ProductShippingStatus[ProductShippingStatus["PENDING"] = 0] = "PENDING";
    ProductShippingStatus[ProductShippingStatus["SENT"] = 1] = "SENT";
    ProductShippingStatus[ProductShippingStatus["DELIVERED"] = 2] = "DELIVERED";
    ProductShippingStatus[ProductShippingStatus["CANCELLED"] = 3] = "CANCELLED";
})(ProductShippingStatus || (ProductShippingStatus = {}));
var usersOrder = {
    id: 1,
    status: ProductShippingStatus.DELIVERED,
    totalPrice: 1500,
    numberOfProducts: 5,
    productName: 'Laptop',
    userInfos: { name: 'Pourya', age: 25, address: 'Iran' },
};
if (usersOrder.status === ProductShippingStatus.PENDING) {
    console.log('⌛ YOUR PRODUCT IS PENDING');
}
else if (usersOrder.status === ProductShippingStatus.SENT) {
    console.log('🚚 YOUR PRODUCT IS SENT');
}
else if (usersOrder.status === ProductShippingStatus.CANCELLED) {
    console.log('❌ YOUR PRODUCT IS CANCELLED');
}
else if (usersOrder.status === ProductShippingStatus.DELIVERED) {
    console.log('✅ YOUR PRODUCT IS DELIVERED');
}
else {
    console.log('❓ YOUR PRODUCT IS UNKNOWN , PLEASE CONTACT CUSTOMER SUPPORT');
}
function combine(input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        var result = input1 + input2;
        return result;
    }
    else {
        var result = input1.toString() + input2.toString();
        return result;
    }
}
var combinedAges = combine(30, 26);
console.log('AGES ===> ', combinedAges);
var combinedNames = combine('Pourya', 'Soleimani');
console.log('NAMES ===> ', combinedNames);
// LITERALS TYPES --> A literal type is a type that is known to be one of a specific set of values.
function combine2(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + ' ' + input2.toString();
    }
    return result;
}
console.log('%c NUMBER OUTPUT ====> ', 'color : hotpink', combine2(30, 26, 'as-number'));
console.log('%c TEXT OUTPUT ====>', 'color : cornflowerblue', combine2('Pourya', 'Soleimani', 'as-text'));
function showOrderStatus(status) {
    console.log("%c YOUR ORDER STATUS IS  : \" ".concat(status, " \""), 'color : orange');
}
showOrderStatus('PENDING');
var addFunction = function (n1, n2) {
    return n1 + n2;
};
console.log(addFunction(5, 10));
// FUNCTION WITH VOID TYPE
function printResult(num) {
    console.log('Result : ' + num);
}
printResult(addFunction(5, 12));
var combineValues = addFunction;
console.log('COMBINED VALUE OUTPUT ===>', combineValues(8, 8));
console.log(typeof combineValues);
//UNKNOW TYPE
var userInput1 = 5;
var userInput2 = 5;
// let string1: string = userInput1;
var string2 = userInput2;
// userInput1.slice(0, 5);
userInput2.slice(0, 1);
