console.log("Unchi")

let name = "holo"

// 常數
const b =45;
let sum = 0;
for(let x = 0; x <= 1000;x++){
   sum += x;
    x++
}
console.log(sum)

let arr=[1,2,3,9,4,8,7]

// arr.forEach(
//     function(i){
//         console.log(i)
//     }
// )

let arr2=[]
let y = 1
for(y ; y<=1000;y++){
    arr2.push(y)
}
console.log(arr2)

 let arr3=arr2.filter(function(i){
    
    return i%2 == 0;
 })
 console.log(arr3)
 
 let arr4=arr2.map(function(i){
    if(i%2 == 0)
    return i!=undefined;
    
   
 })
