const { default: mongoose } = require("mongoose");
// const { isInt16Array } = require("util/types");

let schema = mongoose.Schema({
    question: {type:String,required:true,unique:true},
    choice1: {type:String,required:true},
    choice2: {type:String,required:true},
    choice3: {type:String,required:true},
    choice4: {type:String,required:true},

    answer:{type:String,required:true},
    qid:{type:String},
    link:{type:String}
})

const problem = new mongoose.model("problem",schema)
module.exports = problem
// saveDoc1=()=>{
//     let P1 =  new problem({
//         question: "When a copy constructor may be called?",
//         choice1: "a) When an object of the class is returned by value.",
//         choice2: "b) When an object of the class is passed (to a function) by value as an argument.",
//         choice3: "c) When an object is constructed based on another object of the same class",
//         choice4: "d) all of the above",
    
//         answer:" d) all of the above"
//     })
//     P1.save()
// }





// saveDoc1=()=>{
//     let p1=new problem({
 
//         question:"Constructors have _____ return type",
//         choice1:"void",
//         choice2:"char",
//         choice3:"no",
//         choice4:"int",
//         answer: "no"

//     })
//     p1.save()
// }
// module.exports=saveDoc1



// let readdata=async()=>{
//     // let res=await problem.find()
//     let res=await problem.find({question:"When a copy constructor may be called?"})
//     // console.log(res({choice1}))

//     console.log(res)
// }

// module.exports=readdata
