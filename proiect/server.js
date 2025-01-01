//importare pachete
const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');

//locatia lui main
let initial_path = path.join(__dirname, "main");

//start server
const app = express();
app.use(express.static(initial_path));
app.use(fileupload());

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "home.html"));
})

app.get('/editor', (req, res) => {
    res.sendFile(path.join(initial_path, "editor.html"));
})

//route pentru upload
app.post('/upload', (req,res)=>{
    let file = req.files.image;
    let date = new Date();
    
    //nume imagine
    let imagename = date.getDate() + date.getTime() + file.name;

    //locatie imagine
    let path = 'main/images/' + imagename;

    //creare upload
    file.mv(path, (err, result) => {
        if(err)
        {
            throw err;
        }else {
            //raspuns cu locatia imaginii
            res.json(`images/${imagename}`);
        }
    })
})


app.listen("3000", () => {
    console.log('pornire...');
})