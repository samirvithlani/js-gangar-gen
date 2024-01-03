const users = [
  {
    id: 101,
    name: "Ram",
    email: "ram@gmail.com",
    age: 100,
    gender: "male",
    status: true,
    city: "Delhi",
  },
  {
    id: 102,
    name: "Shyam",
    email: "shyam@gmail.com",
    age: 70,
    gender: "male",
    status: true,
    city: "Bangalore",
  },
  {
    id: 103,
    name: "Seeta",
    email: "seeta@gmail.com",
    age: 60,
    gender: "female",
    status: false,
    city: "Chennai",
  },
];

function genTable() {
  const tbody = document.getElementById("tbody");

  for (let i = 0; i < users.length; i++) {
    var tr = document.createElement("tr");

    idTD = document.createElement("td");
    nameTD = document.createElement("td");
    emailTD = document.createElement("td");
    ageTD = document.createElement("td");
    genderTD = document.createElement("td");
    statusTD = document.createElement("td");
    cityTD = document.createElement("td");
    actionTd = document.createElement("td");

    //create delete button and append to actionTD
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.className = "btn btn-danger";

    deleteBtn.addEventListener("click",()=>{
        deleteUser(users[i].id);
    })


    idTD.innerHTML = users[i].id;
    nameTD.innerHTML = users[i].name;
    emailTD.innerHTML = users[i].email;
    ageTD.innerHTML = users[i].age;
    genderTD.innerHTML = users[i].gender;
    statusTD.innerHTML = users[i].status == true ? "Active" : "Inactive";
    //statusTD.style.color = users[i].status == true ? "green" : "red";
    statusTD.className =
      users[i].status == true ? "badge badge-success" : "badge badge-danger";
    cityTD.innerHTML = users[i].city;
    //append delete button to actionTD
    actionTd.appendChild(deleteBtn);

    tr.appendChild(idTD);
    tr.appendChild(nameTD);
    tr.appendChild(emailTD);
    tr.appendChild(ageTD);
    tr.appendChild(genderTD);
    tr.appendChild(statusTD);
    tr.appendChild(cityTD);
    tr.appendChild(actionTd);

    tbody.appendChild(tr);
  }
}


function deleteUser(userId){

    console.log("Delete User function called",userId);
}