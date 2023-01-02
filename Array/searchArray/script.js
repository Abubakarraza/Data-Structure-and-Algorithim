let data = [10, 20, 30, 33, 50, 45, 87, 30, 99, 30];
let item = 10;
let item2 = 30;
let index2 = [];
for (let i = 0; i < data.length; i++) {
  document.write(`Array of ${i} index is ${data[i]} <br/>`);
}
let index = undefined;
for (i = 0; i < data.length - 1; i++) {
  if (data[i] === item) {
    index = i;
    break;
  }
}
console.warn(index);
for (let i = 0; i < data.length; i++) {
  if (data[i] === item2) {
    index2 = [...index2, i];
  }
}
console.warn(index2);
function onSearchHandler() {
  let elem = document.getElementById('elem').value;
  //   ;
  let dataIndex = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] === parseInt(elem)) {
      dataIndex = [...dataIndex, i];
      document.getElementById(
        'value'
      ).innerHTML = `index of ${data[i]} is ${dataIndex}`;
    }
  }
}
// By js define function
// you can also find index of element
console.log(data.indexOf(10));
