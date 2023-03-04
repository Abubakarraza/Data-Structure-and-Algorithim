let data = [];
let currentSize = data.length;

function push(el) {
  data[currentSize] = el;
  currentSize++;
}
function pop() {
  previousEl = data[currentSize - 1];
  currentSize--;
  data.length = currentSize;
  // console.warn(previousEl);
  return previousEl;
}
function reverseStr(item) {
  for (let i = 0; i < item.length; i++) {
    push(item[i]);
  }
  console.warn('item', data);
  for (let i = 0; i < item.length; i++) {
    item[i] = pop();
  }
}
let str = 'Abubakar';
str = str.split('');
reverseStr(str);
function reverseStrWithInput() {
  let value = document.getElementById('input').value;
  value = value.split('');
  for (let i = 0; i < value.length; i++) {
    push(value[i]);
  }
  console.warn('value', data);
  for (let i = 0; i < value.length; i++) {
    value[i] = pop();
  }
  document.getElementById('result').innerHTML = value.join('');
}
console.warn(str.join(''));
