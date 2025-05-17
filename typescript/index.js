console.log('hello world');
function myNameLogger(name) {
    console.log(name);
}
myNameLogger('Pourya Soleimani');
function add(num1, num2, isShow) {
    if (isShow) {
        return num1 + num2;
    }
    else {
        return 'Return is Restricted';
    }
}
console.log(add(5, 2, false));
