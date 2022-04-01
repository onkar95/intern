

let array = [10,2 ,0,1,0,1,0,2,5,0,5,9,0];
let count = 0;

let aray=array.reverse()
console.log(aray);
// for (let i = 0; i < array.length; i++){
//     const element = array[i];
//     if (element == 0) {
//         count += 1;
//     }

// }
array.forEach(element => {
    if (element == 0) {
        count += 1
        // console.log(element);
    }
});
console.log(count);