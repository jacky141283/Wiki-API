const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const req = require("express/lib/request");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));
//storing all static file in public folder
app.use(express.static("public"));
//connecting to mongo DB
//Must use 127.0.0.1 to replace localhost
mongoose.connect("mongodb://127.0.0.1:27017/wikiDB", {useNewUrlParser: true, useUniFiedTopology: true} );

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error"));
// db.once("open", function(){
//     console.log("Connection opened");
// });

//creating schema
const articleSchema = {
    title: String,
    content: String
};

//Creating model, and articles collection with schema
const Article = mongoose.model("Article", articleSchema);

//Using route() to chain all request with the same route
app.route("/articles").get(function(req, res) {
    Article.find(function(err, foundArticles) {
        if(!err) {
            //return all articles
            res.send(foundArticles);        
        } else {
            res.send(err);    
        }
        // console.log(foundArticles);
    });
})
.post(function(req, res) {
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });
    //Using model(class) to create object and save to DB
    newArticle.save(function(err) {
        if(!err) {
            res.send("Successfully post a article")
        } else {
            res.send(err);
        }
    });

})
.delete(function(req, res) {
    Article.deleteMany(function(err) {
        if(!err) {
            res.send("Delete all articles");
        } else {
            res.send(err);
        }
    });
});


app.route("/articles/:articleID")
.get(function(req, res) {
    Article.findOne(
        //filter out base on query string
        {title: req.params.articleID}, 
        (err, foundArticle) => {
        if(err)
            res.send(err);
        else if(foundArticle)
            //return finding object
            res.send(foundArticle);
        else
            res.send("no article matching");
    });
})
.put((req, res) => {
    Article.findOneAndUpdate(
        {title: req.params.articleID},
        //will overwrite both title and content
        {title: req.body.title, content: req.body.content},
        {overwrite: true},
        (err) => {
            if(!err)
                res.send("replace success!");
            else
                res.send(err);
        }
    )    
})
.patch((req, res) => {
    Article.updateOne(
        {title: req.params.articleID}, //base on query string
        {$set: req.body}, //depends on user input title or content
        (err) => {
            if(!err)
                res.send("update success");
            else
                res.send(err);
        }
    );
})
.delete((req, res) => {
    Article.deleteOne(
        {title: req.params.articleID}, //searching base on query string
        (err) => {
            if(!err)
                res.send("Delete article successfully");
            else
                res.send(err);
        }
    );
});


app.listen(process.env.PORT || 3000, function() {
    console.log("Server is listening on port 3000")
});
