const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
    let allBooks= await BookModel.find().select({bookName:"Thermo",authorName:"PK",_id:0})
    res.send({msg: allBooks})
}
const getBooksInYear= async function(req,res){
    let year=req.query.page
    let isTheYear= await BookModel.find({yearNumber: year})
    res.send({msg:isTheYear})
}

const getXINRBooks = async function(req,res){
    let bookPrice = await BookModel.find({
        indianPrice:{$in: [ 100,200,700]}
    })
    res.send(bookPrice)

}


module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear=getBooksInYear
module.exports.getXINRBooks=getXINRBooks