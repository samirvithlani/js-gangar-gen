var mainDiv = document.getElementById("main");
console.log(mainDiv);
//create element / tag h1

var h1tag = document.createElement("h1") // <h1></h1>
h1tag.innerHTML = "This is h1 tag created by js";

mainDiv.appendChild(h1tag);

var users = ["ram","shyam","amit","parth"]
for(let i=0;i<users.length;i++){

    //create element / tag p
    var pTag = document.createElement("p"); //<p></p> <p></p> <p></p> <p></p>
    pTag.innerHTML = users[i]; //<p>ram</p><p>shyam</p><p>amit</p><p>parth</p>

    mainDiv.appendChild(pTag); //<div id="main"><p>ram</p></div>
}


function loadUsers(){


    var users = [
        {
            id:1,
            name:"raj",
            age:23
        },
        {
            id:2,
            name:"parth",
            age:24
        }
    ]

    var userDiv = document.getElementById("users"); //<div id="users"></div>

    for(let i=0;i<users.length;i++){


        const ul = document.createElement("ul"); //<ul></ul>

        const idLi = document.createElement("li"); //<li></li>
        idLi.innerHTML = users[i].id; //<li>1</li>

        const nameLi = document.createElement("li"); //<li></li>
        nameLi.innerHTML = users[i].name; //<li>raj</li>

        const ageLi = document.createElement("li"); //<li></li>
        ageLi.innerHTML = users[i].age; //<li>23</li>

        ul.appendChild(idLi); //<ul><li>1</li></ul>
        ul.appendChild(nameLi); //<ul><li>1</li><li>raj</li></ul>
        ul.appendChild(ageLi); //<ul><li>1</li><li>raj</li><li>23</li></ul>

        userDiv.appendChild(ul); //<div id="users"><ul><li>1</li><li>raj</li><li>23</li></ul></div>


    }



}

