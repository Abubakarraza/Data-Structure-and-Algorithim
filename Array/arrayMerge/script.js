let data1 = [12, 28, 83, 80, 67];
let data2 = [78, 90, 65, 40, 3];
let data = [];
// First Method
for (let i = 0; i < data1.length; i++) {
  data[i] = data1[i];
}
console.warn(data);
for (let i = 0; i < data2.length; i++) {
  data[data1.length + i] = data2[i];
}
console.warn(data);
//Second Method
data = [...data1, ...data2];
console.warn(data);
//Third Method
data.push([...data1, ...data2]);
console.warn(data);
