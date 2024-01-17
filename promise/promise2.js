const fetchUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(
      //     {
      //     name:"rohit",
      //     age:25
      //     }
      // )
      reject({
        error: "error in fetchUserData",
      });
    }, 3000);
  });
};

var x = fetchUserData();
//x = 100
//x will promise object
console.log(x);
x.then((data) => {
  console.log(data);
  //callback hell
  // data.then((subData)=>{

  // }).catch((error)=>{

  // })
});
x.catch((error) => {
  console.log(error);
});

//callback hell
