let id = null;

function setID(id) {
    this.id = id;
    console.log("SETTING ID TO: " + id);
}

function getID() {
    console.log('RETURN ID AS: ' + id);
    return id;
}