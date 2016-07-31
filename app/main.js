var DomUpdater = function () {
    var update = function (id, value) {
        console.debug("In in main.js");
        document.getElementById(id).innerHTML = value ;
    }
    return {
        update: update,
    };
}();



