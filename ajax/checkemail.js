function checkEmail(){

    const email = document.getElementById('email').value;
    const emailtxt = document.getElementById('emailtxt');
    

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'employee.json', true);
    xhr.send(); 

    xhr.onload = function(){

        const employees = JSON.parse(this.responseText);
        console.log(employees);
        employees.forEach((emp)=>{
            if(emp.email === email){
                emailtxt.innerHTML = 'email is already taken';            
                return;
            }
            else{
                emailtxt.innerHTML = 'email is available';
            }
        }) 

    }
    


}