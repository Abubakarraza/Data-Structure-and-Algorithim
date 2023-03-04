class ReverseStr {
  data = [];
  currentSize = this.data.length;
  currentEl;
  constructor(value) {
    for (let i = 0; i < value.length; i++) {
      this.push(value[i]);
    }
    for (let i = 0; i < value.length; i++) {
      value[i] = this.pop();
    }
  }
  push(newVal) {
    this.data[this.currentSize] = newVal;
    this.currentSize++;
  }
  pop() {
    this.currentEl = this.data[this.currentSize - 1];
    this.currentSize--;
    this.data.length = this.currentSize;
    return this.currentEl;
  }
  display() {
    console.warn(this.data);
  }
}
let F_name = 'Abubakar';
F_name = F_name.split('');
const test = new ReverseStr(F_name);
test.display();
console.warn('name', F_name.join(''));
