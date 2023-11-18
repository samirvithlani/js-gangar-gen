const toLowerCaseUdf = (name) => {
  //
  let newName = "";
  for (let i = 0; i < name.length; i++) {
    let ch = name[i];
    let chCode = ch.charCodeAt(0); //find the ascii code of the character 65
    if (chCode >= 65 && chCode <= 90) {
      chCode = chCode + 32; //97
      ch = String.fromCharCode(chCode); //a
    }
    newName = newName + ch;
  }
  return newName;
};

var empname = "AMIT";
//empname = empname.toLowerCase()
empname = toLowerCaseUdf(empname);
console.log(empname);
