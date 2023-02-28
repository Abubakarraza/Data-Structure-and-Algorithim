let arr = [1, 2, 3, 4, 5, 6, 7];
let newArr;
function reverseArray(start, end) {
  if (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    reverseArray(start + 1, end - 1);
  }
}
reverseArray(0, arr.length - 1);
console.warn(arr);
// javascript predefine reverse function
let arr2 = [3, 2, 4, 3, 7];
console.warn(arr2.reverse());
