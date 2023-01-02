let data = [12, 13, 14, 15, 16, 17, 18];
for (let i = 0; i < data.length; i++) {
  document.write(`Array ${i} is ${data[i]} <br/>`);
}
function onClickHandler() {
  let position = document.getElementById('position').value;
  position = parseInt(position);
  for (let i = position; i < data.length; i++) {
    data[i] = data[i + 1];
  }
  data.length = data.length - 1;
  console.warn(data);
  document.getElementById('para').innerHTML = `new Array is ${data}`;
}
