let mongoose = require('mongoose')

let URI = "mongodb+srv://dhaval:dhaval06@bmu.rwpsln5.mongodb.net/?retryWrites=true&w=majority"

let connectdb = async()=>{
    try{
        let con = await mongoose.connect(URI,
            {useUnifiedTopology:true,
            useNewUrlParser: true}
            )
            console.log("Database is Connected")
    }catch(err){
        console.log(err)
    }
}

module.exports = connectdb