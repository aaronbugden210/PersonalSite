var mongoose = require("mongoose");

var projectSchema = new mongoose.Schema(
{
    name: String,
    image: String,
    description: String,
    githubLink: String
});

module.exports = mongoose.model("Project", projectSchema);