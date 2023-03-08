let data = [];
let currentSize = data.length;
function queue(newValue) {
  data[currentSize] = newValue;
  currentSize++;
}
function deQueue() {
  for (let i = 0; i < data.length; i++) {
    data[i] = data[i + 1];
  }
  currentSize--;
  data.length = currentSize;
}
function display() {
  console.warn(data);
}
queue(20);
console.warn(data);
