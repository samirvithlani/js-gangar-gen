function getData() {
  //pending  --> resloved/rejected

  //promise is class -->

  //resolve and reject are the function
  var prmoise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise is resolved...");
      //reject("promise is rejected...");
    }, 3000);
  });
  console.log(prmoise);
  prmoise.then((data) => {
    console.log(data);
  });
  prmoise.catch((error) => {
    console.log(error);
  });
}

//getData();

function printData() {
  var promise = new Promise((success, fail) => {
    setTimeout(() => {
      fail({
        error: "error in print Data",
        status: 500,
      });
    }, 5000);
  });

  console.log(promise);
  promise.then((data) => {
    console.log(data);
  });
  promise.catch((error) => {
    console.log(error);
  });
}
///printData();

function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "rohit",
        age: 25,
      });
    }, 3000);
  });
}

// var x = fetchUserData();
// console.log(x);
// x.then((data) => {
//   console.log(data);
// });
// x.catch((error) => {
//   console.log(error);
// });

fetchUserData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
