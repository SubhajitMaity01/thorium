const { count } = require("console")
const BookModel= require("../models/bookModel")
const Bookdetails= require("../model/bookdetails")
const bookdetails = require("../models/bookdetails")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await Bookdetails.create(data)
    res.send({msg: savedData})
}

const createAuthor = async function (req, res) {
    let aot=req.body
    let allAuthor= await Bookdetails.create(aot)
      res.send({msg: allAuthor})
}

const allBooks = async function (req, res) {
    let allDetails = await Bookdetails.find( {author_name : "Chetan Bhagat" } )
    const id = allDetails[0].author_id
    const booksName = await bookdetails.find({author_id: id}).select({name:1})
    res.send({msg:booksName})
}

const updateBooksPrice= async function (req, res) {


    const booksDetail =await bookdetails.find({name:"Two states"})
    const id=booksDetail[0].author_id
    const authorN = await bookdetails.find({author_id:id}).select({author_name:1, _id:0})
    const bkName = booksDetail[0].name
    const updatedPrice = await bookdetails.findOneAndUpdate({name:bkName},{price:100},{new:true}).select({price:1,_id:0})
     res.send( { msg:authorN,updatedPrice})
}


const authorsName =async function(req,res){
    const booksId=await bookdetails.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
    const id = booksId.map(imp=>imp.author_id)
    let temp=[];
    for(let i=0;i<id.length;i++){
        let x=id[i]
        const author=await bookdetails.find({author_id:x}).select({author_name:1, _id:0})
        temp.push(author)
    }
    const authorname = temp.flat()
    res.send({msg:authorname})
}




module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.allBooks= allBooks
module.exports.updateBooksPrice=updateBooksPrice
module.exports.authorsName=authorsName

