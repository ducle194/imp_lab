var liElem = document.querySelector('li');
var personList = document.getElementById('name');

if(!localStorage.getItem('personList')) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem('personList', document.getElementById('name').value);

  setStyles();
}

function setStyles() {
  var currentList = localStorage.getItem('personList');

  document.getElementById('name').value = currentList;

  liElem.setAttribute('id',currentList);
}

personList.onchange = populateStorage;
