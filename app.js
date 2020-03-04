var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    methodOverride = require("method-override"),
    Project = require("./models/project");

mongoose.connect("mongodb://localhost:27017/portfolio_site", {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

// Project.create(
// {
//     name: "Crystal Collector",
//     image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Beavis_and_Butt-head_titlecard.png/250px-Beavis_and_Butt-head_titlecard.png",
//     description: "This is a simple game that has the user try to hit a randomly generated score by clicking on the crystal buttons, each with their own randomly generated value. It was written using jQuery. I made some updates a few months after completion to make it object oriented",
//     githubLink: "https://github.com/aaronbugden210/PersonalSite"
// }, (err, project) =>
// {
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log("Added project");
//         console.log(project);
//     }
// });

// Project.create(
// {
//     name: "Pet Match",
//     image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Beavis_and_Butt-head_titlecard.png/250px-Beavis_and_Butt-head_titlecard.png",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     githubLink: "https://github.com/snarfblam/pet-match"
// }, (err, project) =>
// {
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log("Added project");
//         console.log(project);
//     }
// });

//Display all projects
app.get("/", (req, res) =>
{
    Project.find({}, (err, allProjects) =>
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(allProjects);
            res.render("index", {projects: allProjects});
        }
    });
});

app.get("/:id", (req, res) =>
{
    Project.findById(req.params.id, (err, foundProject) =>
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render("show", {project: foundProject});
        }
    });
});

app.listen(3000, process.env.ID, () =>
{
    console.log("Portfolio site is ready");
});