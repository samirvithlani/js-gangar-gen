async function getApiData() {
  const res = await fetch("https://reqres.in/api/users?page=2", {
    method: "GET",
  });

  const data = await res.json();
  console.log(data.data);

  const firstName  =document.getElementById("firstName");
  firstName.innerHTML = data.data[0].first_name;
  const lastName  =document.getElementById("lastName");
  lastName.innerHTML = data.data[0].last_name;
}

getApiData();