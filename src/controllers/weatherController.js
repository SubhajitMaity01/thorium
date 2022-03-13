let axios = require("axios")


let getWeather = async function (req, res) {

    try {
        let cities = ["Bengaluru","Mumbai","Delhi","Kolkata","Chennai","London","Moscow"]
        let cityObjArray = []
        for(let i=0;i<cities.length;i++){
            let obj ={city: cities[i]}
            let result=await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=<92b7d46dbcb5ab7072e246c679d3df88>`)
            console.log(result.data.main.temp)
            obj.temp=result.data.main.temp
            cityObjArray.push(obj)
        }
        let sorted = cityObjArray.sort( function(a,b){return a.temp - b.temp})
        console.log(sorted)
        res.status(200).send({status:true, data: sorted})
     
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getWeather=getWeather