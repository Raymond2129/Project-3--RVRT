// Created an index based on towns
db.records.createIndex( { "town.Frisco": 1 } )
db.records.createIndex( { "town.Ouray": 2 } )
db.records.createIndex( { "town.Pagosa Springs": 3 } )
db.records.createIndex( { "town.Salida": 4 } )
db.records.createIndex( { "town.Steamboat Springs": 5 } )


db.data.select(`type`)
    .where("town").eq("Ouray")
    .sort(`type`)
    .limit(100)


    db.data.find({})
    .projection({})
    .sort({_id:-1})
    .limit(100)


 db.data.createTextIndex ().then ( data => {
      // Get the documents collection
      db.data('users');
      // Create the index
      collection.createIndex(
        { comments : "text" }, function(err, result) {
        console.log(result);
        callback(result);
      });
    };
