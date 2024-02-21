const getApidemo2 = async () => {


    const response = await fetch("https://node5.onrender.com/user/user",{
        method: 'GET',
    })

    const data = await response.json();
    console.log(data);
    console.log(data.data[0]._id)



}

getApidemo2();