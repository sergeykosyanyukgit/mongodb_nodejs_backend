const MongoClient = require('mongodb').MongoClient;
const cont = document.getElementsByClassName('test')[0];

// replace the uri string with your connection string.
const uri = "mongodb+srv://sergey_admin_22:5VAs8wkFx5fXTrr@cluster0-whxsz.gcp.mongodb.net/test?retryWrites=true"
MongoClient.connect(uri, function(err, client) {
   if(err) {
        //console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
        cont.innerHTML = err;
   }
   //console.log('Connected...');
   
   cont.innerHTML = "Connected...";
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
});