function add() {
    var name = document.getElementById('name').value;

    var pplList = get_people();
    pplList.push(name);
    localStorage.setItem('person', JSON.stringify(pplList));

    show();

    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var pplList = get_people();
    pplList.splice(id, 1);
    localStorage.setItem('person', JSON.stringify(pplList));

    show();

    return false;
}
