//ajax full --> asyncronous javascript and xml
//xhr --> xml http request
//path -->
//absolute path --> D:\royal\js-gen-gandhinagar\ajax\ajax.js
//relative path -->./ajax.js -->relative to current file
//../ajax.js -->relative to parent file
//../../ajax.js -->relative to parent of parent file

function loadText() {
    const output = document.getElementById("output");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "../text.txt", true);
  xhr.send();

  xhr.onload = function () {
    console.log(xhr.responseText);
    output.innerHTML = xhr.responseText;
  };
}
