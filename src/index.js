let express = require("express")
let path = require("path")
let hbs = require("hbs")
let app = express()
let problem= require("../model/model")

hbs.registerHelper('limit', function (arr, limit) {
    if (!Array.isArray(arr)) { return []; }
    return arr.slice(0, limit);
  });
hbs.registerHelper('from', function (arr, start,limit) {
    if (!Array.isArray(arr)) { return []; }
    return arr.slice(start,limit);
});

app.set("view engine", "hbs")


app.use(express.static(path.join(__dirname, "../public")));

let regex = /\w/
app.get("/", (req, res) => {
    res.render("home")
})
app.get("/practice", (req, res) => {
    res.render("prob")
})
app.get("/about", (req, res) => {
    res.render("about")
})


app.get("/quiz/:ref", (req, res) => {
    let ref = req.params.ref
    let query = {qid : ref}
    console.log(query)
    problem.find(query,function(err,questions)
    {
        if(err)
        {
            console.log("ERRRORRRRRRR")
        }
        res.render("quiz",{questions})
    })
})

app.get(regex, (req, res) => {
    res.render("error")
})

app.set("views", path.join(__dirname, "../Templates/views"))
hbs.registerPartials(path.join(__dirname, "../Templates/partials"))


app.listen("3000", () => {
    console.log("Server is Connected")
    // console.log(__dirname)
    // let file = path.join(__dirname,"about.html")
    // console.log(file)
})


let connectdb = require("../connection/connectdb")
// const problem = require("../model/model")
connectdb()


// let saveDoc1 = require("../model/model")
// saveDoc1()


// let readdata=require("../model/model")
// readdata()
