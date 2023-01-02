// Traversing
let data = [22, 23, 83, 93, 63, 87, 49, 09, 76, 39, 46, 86, 30, 19, 20];
for (let i = 0; i < data.length; i++) {
  document.write(`Array ${i} is ${data[i]} <br/>`);
}
// Accessing
let x = 0;
document.write(data[9]);
// Accessing data with input
function onGetElementHandler() {
  let el = document.getElementById('element').value;
  if (el < data.length && typeof parseInt(el) === 'number' && el >= 0) {
    // alert(data[el]);
    document.getElementById(
      'para'
    ).innerHTML = `Value of ${el} index is ${data[el]}`;
  } else {
    alert('Please Type Valid Data');
  }
}
