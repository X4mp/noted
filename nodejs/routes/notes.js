var express = require('express');
var mongo = require('mongodb').MongoClient;
var router = express.Router();
var url = 'mongodb://localhost:54321/noted';

router.post('/', function(req, res, next) {
  console.log(req.body);
  //if successfull
  //res.send('success')
  //res.render('notes', { notes: ['note1', 'note2'] });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  var notes_array = new Array();
  mongo.connect(url, function(err, db) {
    if(err) throw err;
    var collection = db.collection('notes');
    collection.find({}).toArray(function(err, result) {
      if(err){
        console.log(err);
      } else if (result.length) {
        //console.log('Found:', result);
        result.forEach(function(entry) {
          notes_array.push(result.note);
        });
      } else {
        console.log('No document(s) found with defined "find" criteria!');
      }
    });

    db.close()
  });
  res.render('notes', { notes: notes_array });
});

module.exports = router;
