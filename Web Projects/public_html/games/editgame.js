let id = null;

function setID(id) {
    this.id = id;
    document.getElementById("_id").value = id;
    console.log("SETTING ID TO: " + id);
}

function getID() {
    console.log('RETURN ID AS: ' + id);
    return id;
}