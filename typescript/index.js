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
var myHobbies = ['Sports', 'Cooking', 'Coding'];
for (var _i = 0, myHobbies_1 = myHobbies; _i < myHobbies_1.length; _i++) {
    var hobby = myHobbies_1[_i];
    console.log(hobby);
}
