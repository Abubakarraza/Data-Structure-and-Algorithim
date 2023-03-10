let data = [];
let currentSize = data.length;
let maxSize = 5;
function queue() {
  if (data.length < maxSize) {
    let newValue = document.getElementById('ele').value;
    if (newValue) {
      data[currentSize] = newValue;
      currentSize++;
      display();
    } else {
      alert('please type item');
    }
  } else {
    alert('You reach your maximum limit');
  }
}
function deQueue() {
  if (data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      data[i] = data[i + 1];
    }
    currentSize--;
    data.length = currentSize;
    display();
  } else {
    alert('Your data is already empty');
  }
}
function display() {
  console.warn(data);
}
