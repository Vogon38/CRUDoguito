let MongoClient = require('mongodb').MongoClient;
let connectionUrl = "mongodb+srv://doguito:EzpzVdbQCXukd7i5@cluster0.yq6es.mongodb.net/crud?retryWrites=true&w=majority";

let obj = {
    "Nome": "nome"
}

console.log("OBJ: " + obj)

MongoClient.connect(connectionUrl, function(err, client) {
    if (err) throw err;

    console.log("Connected correctly to server");

    var db = client.db('crud')

    db.collection("doguito").insertOne(obj, function(err, res) {
        if (err) throw err;
        console.log("1 message inserted");
        client.close();
    });
});