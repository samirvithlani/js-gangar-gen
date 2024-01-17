// const callApi = () => {


//     fetch("https://node5.onrender.com/user/user").then((res)=>{

//         res.json().then((data)=>{
//             console.log(data)
//         }).catch((err)=>{
//             console.log(err)
//         })
        
//     }).catch((err)=>{
//         console.log(err)
//     })




// }

const callApi = async () => {

    const res = await fetch("https://node5.onrender.com/user/user");
    const data = await res.json();
    console.log(data);


}
callApi();