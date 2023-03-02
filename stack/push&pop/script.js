let data = [];
let arrLength = data.length;
let max = 15;
document.write(data);
function push(newValue) {
  if (arrLength >= max) {
    alert('your maximum limit is complete');
    return;
  } else {
    data[arrLength] = newValue;
    arrLength++;
  }
}
function pop() {
  if (arrLength > 0) {
    arrLength--;
    data.length = arrLength;
    console.warn(data);
  } else {
    alert('your data is empty');
  }
}
push(4);
push(5);
push(6);
push(98);
push(78);
pop();
// push(19);
// this is js predefine function for push and pop
data.push(109);
data.pop();
console.warn(data);
function pushHandler() {
  let newValue = document.getElementById('num').value;
  let num = parseInt(newValue);
  push(num);
  console.warn(data);
}
