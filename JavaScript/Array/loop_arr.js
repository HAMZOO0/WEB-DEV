// loops in array 
let array= [11,12,13,14,15,16]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element,index)

}

// for each loop
let ary = [5, 6, 4, 3, 8, 6, 3, 2];
ary.forEach((value, index, arr) => {
    console.log(value, index, arr);
});
