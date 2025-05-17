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
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 1] = "ADMIN";
    Roles[Roles["READ_ONLY"] = 2] = "READ_ONLY";
    Roles[Roles["AUTHOR"] = 3] = "AUTHOR";
    Roles[Roles["TEACHER"] = 4] = "TEACHER";
    Roles[Roles["USER"] = 5] = "USER";
})(Roles || (Roles = {}));
var person = {
    name: 'Pourya',
    age: 25,
    isMale: true,
    hobbies: ['Sports', 'Cooking'],
    role: Roles.ADMIN,
};
if (person.role === 1) {
    console.log('user is an Admin');
    console.log(Roles.ADMIN);
}
else {
    console.log('user is not an Admin');
}
