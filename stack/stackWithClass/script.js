class Stack {
  items = [];
  currentSize;
  maxSize;
  constructor(size) {
    this.maxSize = size;
    this.currentSize = this.items.length;
  }
  push(newVal) {
    if (this.currentSize <= this.maxSize) {
      this.items[this.currentSize] = newVal;
      this.currentSize++;
    } else {
      alert('Your maximum limit is exceed');
    }
  }
  pop() {
    if (this.currentSize <= 0) {
      alert('Your Stack is Empty');
    } else {
      this.currentSize--;
      this.items.length = this.currentSize;
    }
  }
  display() {
    console.warn(this.items);
  }
}
const testing = new Stack(5);
testing.push(23);
testing.push(239);
testing.pop();
console.log(testing.items);
