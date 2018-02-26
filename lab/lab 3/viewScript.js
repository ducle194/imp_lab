var ul = document.getElementById("dynamic-list");
var person = document.getElementById("name")

function addItem(){
  var li = document.createElement("li");
  var nameValue = person.value;
  var ctx = document.createTextNode(nameValue);
  li.setAttribute('id',nameValue);
  li.appendChild(ctx);
  ul.appendChild(li);
}

function removeItem(){
  var item = document.getElementById(person.value);
  ul.removeChild(item);
}
