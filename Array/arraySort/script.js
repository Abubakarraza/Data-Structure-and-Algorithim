let data = [90, 45, 86, 34, 76, 12, 9];
document.write(`Array ${data}`);
console.warn(data, 'before sorting');
for (i = 0; i < data.length; i++) {
  for (j = 0; j < data.length; j++) {
    let temp = data[j];
    if (data[j] > data[j + 1]) {
      data[j] = data[j + 1];
      data[j + 1] = temp;
    }
  }
}
document.write(`<br/> new Sorted  Array is ${data}`);
console.warn(data);
// sort by predefine function
const info = [29, 98, 78, 65, 45];
info.sort();
console.log(info, 'info');
