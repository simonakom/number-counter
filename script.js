const count = document.querySelector(".count")
const subtract = document.querySelector(".subtract")
const reset = document.querySelector(".reset")
const add = document.querySelector(".add")

subtract.addEventListener("click", function() {count.innerHTML--})
add.addEventListener("click", function() {count.innerHTML++})
reset.addEventListener("click", function() {count.innerHTML = 0})


// function subtractOne() {
//     count.innerHTML--;
// }
// function addOne() {
//     count.innerHTML++;
// }
// function resetCount() {
//     count.innerHTML = 0;
// }
// subtract.addEventListener("click", subtractOne);
// add.addEventListener("click", addOne);
// reset.addEventListener("click", resetCount);