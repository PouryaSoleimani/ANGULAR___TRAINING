console.log('hello world');

function myNameLogger(name: string) {
  console.log(name);
}

myNameLogger('Pourya Soleimani');

function add(num1: number, num2: number, isShow: boolean) {
  if (isShow) {
    return num1 + num2;
  } else {
    return 'Return is Restricted';
  }
}
console.log(add(5, 2, false));
