const express = require('express');
const router = express.Router();
const arrmovies=['tytanic','virzara','batman','spiderman']
const arrmoviesind=['bahubali','dabang','puspa']

router.get('/test-me', function (req, res) {
    res.send('My first ever api!');
});

//module.exports = router;
router.get('/movies',function(req,res){
    res.send(arrmovies)
});
 //2
 router.get('/movie/:movieIndex',function(req, res){
    mov = ["Mastan", "Don","Force","Comrade","War"]
    res.send(mov[value])
 })

 //3
 router.get('/movie1/:movieId',function(req,res){
     mov1=["Don","Dabang","Dishoom","Force","Puspa"]
     let value1= req.params.movieId;
     if(value1>mov1.lenght-1){
         res.send('"Error: Use a valid Id"')
     }else{
         res.send(mov1[value1])
     }
})
 
 //4
 router.get('/films',function(req, res){
     let filmArr =[
         {
             "id":1,
             "name":"The Shining"
         },{
             "id":2,
             "name":"Incendies"
         },{
             "id":3,
             "name":"Majnu"
         },{
             "id":4,
             "name":"Finding Demo"
         }
     ]
     res.send(filmArr)
})

 //5
 router.get('/film1/:filmId', function(req,res){
     
 filmArr1 =[
         {
             "id":1,
             "name":"The Shining"
         },{
             "id":2,
             "name":"Incendies"
         },{
             "id":3,
             "name":"Majnu"
         },{
             "id":4,
             "name":"Finding Demo"
         }
     ]
     let value2 = req.params.filmid;
     if(value2>filmArr1.lenght-1){
         res.send('"No movie exist with this Id"');
     }else{
         res.send(filmArr1[value2]);
     }
})

module.exports = router;