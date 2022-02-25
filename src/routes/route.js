const express = require('express');
const router = express.Router();
const player = [ {
    "name" : "Subhajit" ,
    "DOB" : "15/05/2000" ,
    "Gender" : "male" ,
    "City" : "Mednipur" ,
    "Sports" : [ "Swimming" ] ,
    "Booking" : []
} ,
{
    "name" : "Shivam" ,
    "DOB" : "4/10/99" ,
    "Gender" : "Male" ,
    "City" : "BulandShahr" ,
    "Sports" : [ "Cricket" ] ,
    "Booking" : []
} ,
{
    "name" : "Parul" ,
    "DOB" : "10/6/99" ,
    "Gender" : "Female" ,
    "City" : "Meerut" ,
    "Sports" : [ "Bedminton" ] ,
    "Booking" : []
} ,
{
    "name" : "Lovedeep" ,
    "DOB" : "1/4/98" ,
    "Gender" : "Male" ,
    "City" : "Noida" ,
    "Sports" : [ "Basketball" ] ,
    "Booking" : []
} ,
{
    "name" : "Charu" ,
    "DOB": "18/10/02" ,
    "Gender" : "Female" ,
    "City" : "BulandShahr" ,
    "Sports" : [ "swimming" ] ,
    "Booking" : []
} ,
]


const booking = [
    {
        "BookingNo" : "1" ,
        "SportID" : "245654" ,
        "CenterId" : "7865" ,
        "Type" : "Private" ,
        "Slot" : "346797654327" ,
        "BookedOn" : "31/05/2020" 
    } ,
    {
        "BookingNo" : "2" ,
        "SportID" : "24538374" ,
        "CenterId" : "7278395" ,
        "Type" : "Private" ,
        "Slot" : "346797654837327" ,
        "Bookedon" : "03/09/2021" 
    } ,
    {
        "BookingNo" : "3" ,
        "SportID" : "2875654" ,
        "CenterId" : "787266265" ,
        "Type" : "Private" ,
        "Slot" : "9289797654327" ,
        "Bookedon" : "18/30/2021" 
    } ,
    {
        "BookingNo" : "4" ,
        "SportID" : "9282654" ,
        "CenterId" : "78682725" ,
        "Type" : "Private" ,
        "Slot" : "8286327654327" ,
        "Bookedon" : "09/08/2022" 
    } ,
    {
        "BookingNo" : "5" ,
        "SportID" : "245654" ,
        "CenterId" : "7865" ,
        "Type" : "Private" ,
        "Slot" : "346797654327" ,
        "Bookedon" : "18/09/2022" 
    } ,
]


router.post('/player', function( req , res ) {
    let newPlayer = req.body.name
    let flag = true
    for(let i=0 ; i<player.length ; i++){
        if(newPlayer === player[i].name ){
            flag = false 
            res.send("error : Invalid Entry")
         }
     }
     if( flag === true ){
            player.push(req.body)
            res.send( player )
     }
})


let players = [];
router.post("/players",function(req,res){
    let player = req.body;
    for(let i=0;i<players.length;i++){
        if(players[i].name==playerName){
            req.setEncoding("player already exist")
        }
    }
    players.push(player);
    console.log("Here is the players array",player)
    res.send(players); 
});


router.post('/players/:playerName/bookings/:bookingId',function(req,res){
    let name=req.params.playerName
    let id=req.params.bookingId;
    let isPlayerPresent=false;
    for(let i=0;i<players.length;i++){
        if(players[i].name==name){
            isPlayerPresent=true
        }
        if(!isPlayerPresent){
            return res.send('player not present');
        }
    }
    let booking = req.body;
    for(let i=0;i<=players.length;i++){
        if(players[i].name==name){
            for(let j=0;j<players[i].bookings.length;j++){
                if(players[i].bookings[j].bookingNumber== id){
                    return res.send('booking with the id already present')
                }
                players[i].bookings.push(booking)
            }
        }
    }
    res.send(players)
})
module.exports = router;
