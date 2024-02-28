function loadStudent() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "./student.json", true);
  xhr.send();

    xhr.onload = function () {

        console.log(xhr.responseText);
        const stuObj = JSON.parse(xhr.responseText);
        console.log(stuObj);
        console.log(stuObj.name)
        
    }


}

function loadEmployee() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./employee.json", true);
    xhr.send();
  
      xhr.onload = function () {
  
          console.log(xhr.responseText);
          const empObj = JSON.parse(xhr.responseText);
          empObj.forEach((emp)=>{
            console.log(emp.name)
          })
          
      }
  
  
  }
  