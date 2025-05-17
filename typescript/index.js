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
//^ ARRAYS
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
//  TUPLES --> Cannot use other value types instead of the specified types
var tupleExample = ['hello', 10, true];
tupleExample[0] = 'world';
console.info(tupleExample);
var tupleExample2 = [20, 'pourya', true, 30];
console.info('TUPLE 1', tupleExample2);
tupleExample2 = [50, 'ali', false, 40];
console.info('TUPLE 2', tupleExample2);
// ENUMS --> Enum is a special "class" that represents a group of constants (unchangeable variables).
var Categories;
(function (Categories) {
    Categories[Categories["TOP"] = 0] = "TOP";
    Categories[Categories["PANTS"] = 1] = "PANTS";
    Categories[Categories["SHOES"] = 2] = "SHOES";
    Categories[Categories["CAPS"] = 3] = "CAPS";
    Categories[Categories["SOCKS"] = 4] = "SOCKS";
    Categories[Categories["GLOVES"] = 5] = "GLOVES";
    Categories[Categories["JACKETS"] = 6] = "JACKETS";
})(Categories || (Categories = {}));
var myProduct = {
    id: 1,
    title: 'ADIDAS T-SHIRT',
    price: 100,
    description: 'This is a product',
    category: Categories.TOP,
    isSale: true,
};
switch (myProduct.category) {
    case Categories.TOP:
        console.log('This is a top');
        break;
    case Categories.PANTS:
        console.log('This is a pants');
        break;
    case Categories.SHOES:
        console.log('This is a shoes');
        break;
    case Categories.CAPS:
        console.log('This is a caps');
        break;
    case Categories.SOCKS:
        console.log('This is a socks');
        break;
    case Categories.GLOVES:
        console.log('This is a gloves');
        break;
    case Categories.JACKETS:
        console.log('This is a jacket');
        break;
    default:
        console.log('This is an unknown category');
        break;
}
