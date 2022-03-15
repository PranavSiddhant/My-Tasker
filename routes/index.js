var express = require('express');
var router = express.Router();
var taskscollection = require('./users');
const app = express();

app.use("/public", express.static("public/"));

/* GET home page. */
router.get('/',function(req,res,next){
  taskscollection.find({},(err,docs)=>{
    res.render('index',{taskscollection:docs});
  })
});
// router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
// });

 router.get('/edit/:id', (req,res)=>{
   const id = req.params.id;
   taskscollection.find({}, (err,docs)=>{
     res.render('update', {taskscollection: docs, idupdate: id});
  });
});


router.post('/edit/:id',(req,res)=>{
  const id = req.params.id;
  taskscollection.findByIdAndUpdate(id, {
    content: req.body.task
  }, err =>{
    if(err) {
      res.send(err);
    }else {
      res.redirect("/");
    }
  });
});

router.get('/remove/:id', (req,res)=>{
  const id = req.params.id;
  taskscollection.findByIdAndRemove(id,err => {
    if(err) {
      res.send('ERROR OCCURED');
    }
    else {
      res.redirect("/");
    }
  });
});

router.post('/submit',(req,res)=>{
  taskscollection.create({
      content:req.body.task
  })
  .then(()=>{
     res.redirect("/"); 
        // res.send('working')
  })
});

module.exports = router;
