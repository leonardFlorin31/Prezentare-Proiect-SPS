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

app.get('/about', (req, res) => {
    res.sendFile(path.join(initial_path, "about.html"));
})

//route pentru upload
app.post('/upload', (req,res)=>{
    let file = req.files.image;
    let date = new Date();
    
    //nume imagine
    let imagename = date.getDate() + date.getTime() + file.name;

    //locatie upload imagine
    let path = 'main/uploads/' + imagename;

    //creare upload
    file.mv(path, (err, result) => {
        if(err)
        {
            throw err;
        }else {
            //raspuns cu locatia imaginii
            res.json(`uploads/${imagename}`);
        }
    })
})

app.get("/admin", (req, res) => {
    res.sendFile(path.join(initial_path, "dashboard.html"));
})

app.get("/:blog", (req, res) => {
    res.sendFile(path.join(initial_path, "blog.html"));
})

app.use((req, res) => {
    res.json("404");
})

app.listen("3000", () => {
    console.log('pornire...');
})