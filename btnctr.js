const title = document.getElementById("title");
console.log(title)

const button = document.querySelector("#btn");
const input = document.querySelector("#input");

let x = 0;
let arr = ["快", "還要更快","星","爆","氣","流","斬"]

button.addEventListener("click", function() {
    const y = input.value;
    title.innerText = y;
    input.value = 87;
     
 });

// button.addEventListener("click", function() {
//    if(x==arr.length){
//     console.log("摸頭還要哭RRRRRRRRRRRRRRR");
//     title.innerText =  "摸頭還要哭RRRRRRRRRRRRRRR";
//     return x = 0;
//    }
//     title.innerText = arr[x];
//     console.log(arr[x]);
//     x += 1;
    
// });