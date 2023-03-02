function sixthFunction() {
  let data = 20;
  console.log(data);
}
function fifthFunction() {
  sixthFunction();
}
function fourthFunction() {
  fifthFunction();
}
function thirdFunction() {
  fourthFunction();
}
function secondFunction() {
  thirdFunction();
}
function firstFunction() {
  secondFunction();
}
firstFunction();

//Head Recursion

// in head Recursion console is run every time because it run before condition or logic where recursion is implement so it run console first
function test(x) {
  console.warn(x);
  if (x > 0) {
    test(x - 1);
  }
}
test(5);

// Tail Recursion
// but in this case console is not called because condition is first implement and console is on second step it every time run same function until condition is not satisfied and it save functions in call stack and the result of console is totally opposite from head recursion
function test2(x) {
  if (x > 0) {
    test2(x - 1);
  }
  console.warn(x);
}
test2(5);
