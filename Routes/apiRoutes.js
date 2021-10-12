const fs = require('fs');
const data = require('../Develop/db/db.json')

module.exports(function(app){
    app.get('/api/notes', function(reg, res){
        res.json(data);
    })
    app.post('/app/notes', function(reg, res){
        data.push(reg.body)
        data.forEach((note, i) => {
            note.id = i + 1;
        });
        fs.writeFile("./db/db.json", json.stringify(data), function(){
            res.json(data);
        })
    })
    app.delete('/app/notes/id:', function(req, res){
        const id = req.params.id;
        data.slice(id - 1, 1)
        data.forEach((note, i) => {
            note.id = i + 1;
        });
        fs.writeFile("./db/db.json", json.stringify(data), function(){
            res.json(data);
        });
    });
});