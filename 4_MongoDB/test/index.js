console.log("Iniciando...");

const MongoClient = require('mongodb').MongoClient;

// Connection URL
var url = 'mongodb://localhost:27017/test';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  console.log("Connected correctly to server");

	// db.collection('Llamas').insertOne(
	// 	{
	// 		username: 'Meiser',
	// 		nivelDB: 'Hachon',
	// 		ciclo: 7,
	// 		aprobado: false,
	// 	},(err,res) => {
	// 		if(err){
	// 			console.log("Hubo un error");
	// 		}

	// 	}
	// 		console.log(JSON.stringify(res.ops,undefined,2));
	// );

	var llamas = db.collection('Llamas').find({
		ciclo: 7
	});

	llamas.toArray((err,docs)=>{
		console.log(docs);
	});


  	db.close();
});
