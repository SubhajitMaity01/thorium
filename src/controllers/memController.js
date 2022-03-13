let axios= require("axios")

let getMeem = async function(req, res){
    try{
        let memeId = req.query.template_id
        let text0 = req.query.text0
        let text1=req.query.text1
        let option = {
            method: "post",
            url:`https://api.imgflip.com/caption_image?template_id=${memeId}&text0=${text0}&text1=${text1}&username=chewie12345&password=meme@123`

        }
        let result = await axios(option)
        res.status(200).send({data:result.data})
    }catch(err){
        console.log(err)
        res.status(500).send({status: false,msg:"server error"})
    }
}

module.exports.getMeem=getMeem