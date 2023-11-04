//Json java script object notation
// string --> array --> json array

// var userName = "John";
// var uId = 123;
// var userRole = "admin";
// // var ...uId...uId.

// console.log("User Name is ", userName);
//key value pair

var user  = {

    id: 123,
    name: "John",
    email:"john@gmail.com",
    role: "admin",

    address:{
        city: "Bangalore",
        state:"Karnataka",
        pincode: 560001,
        street: "MG Road",
        country: "India",
    }
}
console.log("User ", user);
console.log("User Name ", user.name);
console.log("User Email ", user.email);
console.log("User Role ", user.role);
console.log("User Id ", user.id);

console.log("User Address ", user.address);

// console.log("User City ", user.city);
// console.log("User State ", user.state);
// console.log("User Pincode ", user.pincode);
// console.log("User Street ", user.street);

console.log("User City ", user.address.city);
console.log("User State ", user.address.state);
console.log("User Pincode ", user.address.pincode);
console.log("User Street ", user.address.street);