function show() {
    var pplList = get_people();

    var table = '<ul>';
    for(var i=0; i<pplList.length; i++) {
        table += '<li>' + pplList[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    table += '</ul>';

    document.getElementById('list').innerHTML = table;

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

document.getElementById('add').addEventListener('click', add);
show();
