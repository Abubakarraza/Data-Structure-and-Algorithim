let costOfApple = 10;
let totalApple = 0;
let money = 100;
function buyApple(x) {
  if (x >= costOfApple) {
    console.warn(`I have ${totalApple} Apple with remaining ${x} Rupees`);
    buyMore(x);
  } else {
    console.warn("I don't have money to buy Apple");
  }
}
function buyMore(x) {
  totalApple++;
  buyApple(x - costOfApple);
}
buyApple(money);
