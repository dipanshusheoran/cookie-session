const express = require('express')
var app = express()
const expressSession = require('express-session')

app.set('view engine', 'hbs')

app.use(expressSession({
    resave: false,
    saveUninitialized:false,
    secret :"random string here"
}))

app.get('/',(req,res)=>{
    if(!req.session.visits) req.session.visits = 1
    else req.session.visits++
    res.render('page',{name:'Deepanshu', count : +(req.session.visits)})
})

app.listen(3000,()=>{
    console.log("Server has started")
})