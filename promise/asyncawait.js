const fetchUserData = () => {



        return new Promise((resolve,reject)=>{

            setTimeout(()=>{
                resolve({
                    name:"rohit",
                    age:25
                })
            },3000)

        })

}

//non blocking / non sync
//to achive sync we use async await and will create function async


async function printData(){


    // var x = fetchUserData();
    // x.then((data)=>{
    //     console.log(data);
    // })
    // x.catch((error)=>{
    //     console.log(error);
    // })

    // fetchUserData().then((data)=>{
    //     console.log(data);
    // }).catch((error)=>{
    //     console.log(error);
    // })

    console.log("before await");
    var x = await fetchUserData();
    console.log(x);
    console.log("after await");



}


printData();