class Queue {
  constructor(size) {
    this.max = size;
    this.items = new Array(size);
    this.currentSize = 0;
    this.rear = -1;
    this.front = -1;
  }
  display() {
    console.log('items:', this.items);
  }
  enqueue(value) {
    if (this.currentSize >= this.max) {
      alert('Queue is full');
    } else {
      if (this.rear == this.max - 1) {
        this.rear = 0;
      } else {
        this.rear++;
      }
      this.items[this.rear] = value;
      this.currentSize++;
      if (this.front == -1) {
        this.front = this.rear;
      }
    }
  }
}
const data = new Queue(5);
data.enqueue(10);
