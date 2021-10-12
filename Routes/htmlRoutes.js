const path = require('path');
const { dirname } = require('path/posix');

module.exports = function(app){
    app.get("/notes", function(reg,res){
        res.sendfile(path.join(--dirname, "../public/notes.html"));
    });
    app.get("*", function(reg,res){
        res.sendfile(path.join(--dirname, "../public/index.html"))
    })
}