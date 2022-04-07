let id = null;

function setIDTo(id) {
    this.id = id;
    console.log("SETTING ID TO: " + id);
}

function getID() {
    console.log('RETURN ID AS: ' + id);
    return id;
}