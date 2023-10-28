
const science = (name)=>{
    return "adminssion for science is open for "+name;
}

const commerce = (name)=>{
    return "adminssion for commerce is open for "+name;
}
const arts = (name)=>{
    return "adminssion for arts is open for "+name;
}




function getAdminssion(name,cb){


    return cb(name)
    // var c = cb(name)
    // return c
}

//consdion 
var flag = getAdminssion("ram",commerce)
console.log(flag)