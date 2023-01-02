let data = [12, 34, 59, 32, 87];
// let newEl = 19;
// let position = 3;
// console.log(data);
// for (let i = data.length; i >= 0, i--; ) {
//   console.log(data[i]);
//   if (i >= position) {
//     data[i + 1] = data[i];
//     if (i == position) {
//       data[i] = newEl;
//     }
//   }
// }
for (let i = 0; i < data.length; i++) {
  document.write(`Array ${i} is ${data[i]} <br/>`);
}
function onClickHandler() {
  let position = document.getElementById('position').value;
  let newEl = document.getElementById('newEl').value;
  for (let i = data.length; i >= 0, i--; ) {
    console.log(data[i]);
    if (i >= position) {
      data[i + 1] = data[i];
      if (i == position) {
        data[i] = newEl;
      }
    }
  }

  document.getElementById('para').innerHTML = `New Array  is ${data} <br/>`;
}
function onClickHandler1() {
  let position = document.getElementById('position1').value;
  let newEl = document.getElementById('newEl1').value;
  let numDel = document.getElementById('del').value;
  numDel = parseInt(numDel);
  data.splice(position, numDel, newEl);
  document.getElementById('para').innerHTML = `New Array  is ${data} <br/>`;
}
