async function getApiCall(){


    const response = await fetch("https://reqres.in/api/users?page=2",{
        method: 'GET',
    })
    console.log(response);
    const data = await response.json();
    console.log(data);
    console.log(data.page)
    console.log(data.data)

    const output = document.getElementById('output');
    for(let i=0;i<data.data.length;i++){

        //        console.log(data.data[i].first_name + " "+data.data[i].last_name)
        const h1 = document.createElement('h1');
        h1.innerHTML = data.data[i].first_name + " "+data.data[i].last_name;
        output.appendChild(h1);

    }




}

getApiCall();