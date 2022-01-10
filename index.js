// console.log("Hello World");

import Express from "express";
import photos from "./Photos.js";

const app = Express();
const port = 3000;

//GET, PUT, POST, DELETE

app.get('/photos/:id', (req, res) => {
    res.status(200);
    res.json(photos.find((photos) => {
        return +req.params.id === photos.id
    }))
    // res.send(req.params.id);
    // res.send('Hello World');
    // res.json(photos);
})

app.listen(port, () => console.log(`Express running on port: ${port}...`))