function get_people() {
    var pplList = new Array;
    var pplStore = localStorage.getItem('person');
    if (pplStore !== null) {
        pplList = JSON.parse(pplStore);
    }
    return pplList;
}
