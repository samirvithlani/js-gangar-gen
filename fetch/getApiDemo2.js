async function getApi(){

    var loader = document.getElementById("loading")
    loader.innerHTML = "Loading..."
    loader.style.display = "block"
    loader.style.margin = "auto"
    const res = await fetch("https://node5.onrender.com/user/user",{
        method:"GET"
    })

    const data = await res.json()
    console.log(data.data)//array
    loader.innerHTML = ""

    const tbody = document.getElementById("tbody") 

    for(let i=0;i<data.data.length;i++){

        const tr = document.createElement("tr")
        const idTD = document.createElement("td")
        idTD.innerHTML = data.data[i]._id
        const nameTd = document.createElement("td")
        nameTd.innerHTML = data.data[i].name
        const emailTd = document.createElement("td")
        emailTd.innerHTML = data.data[i].email
        const ageTd = document.createElement("td")
        ageTd.innerHTML = data.data[i].age
        const statusTd = document.createElement("td")
        statusTd.innerHTML = data.data[i].isActive

        const actionTd = document.createElement("td")

        //button creation....
        
        const deleteButton = document.createElement("button")
        deleteButton.innerHTML = "Delete"
        deleteButton.className = "btn btn-danger"
        actionTd.appendChild(deleteButton)


        //delete api...

        deleteButton.addEventListener("click",async()=>{
            //delete api...
            //alert(data.data[i]._id)
            const res1 =await  fetch("https://node5.onrender.com/user/user/"+data.data[i]._id,{
                method:"DELETE"
            })
            console.log("res1...",res1)
            if(res1.status == 204){
                //alert("Deleted...")
                window.location.reload() //refresh...
            }
        })




        tr.appendChild(idTD)
        tr.appendChild(nameTd)
        tr.appendChild(emailTd)
        tr.appendChild(ageTd)
        tr.appendChild(statusTd)
        tr.appendChild(actionTd)
        tbody.appendChild(tr)
    }



}