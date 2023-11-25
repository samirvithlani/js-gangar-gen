//array is group of elements of either same or different data types
//array is ordered collection of elements
//array is mutable
//array is dynamic
//array is object
//array allows duplicate values
//array allows heterogeneous values
//array is index based

var arr = [1,2,3,4,5,6,7,8,9,10,11,12,90,78];

len = arr.length;
console.log("len/.",len);

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

//array manupulation methods

var x = arr.push(100);
console.log(x);
console.log(arr);


var removedelm = arr.pop();
console.log("removing...",removedelm);
console.log("after pop....");
console.log(arr);


x = arr.unshift(200);
console.log("new len,,",x);
console.log(arr);

removedelm = arr.shift();
console.log("removed elm",removedelm);
console.log(arr);