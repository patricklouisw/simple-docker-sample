import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname)

let app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get('/profile-picture', (req, res) => {
    let img = fs.readFileSync('profile-1.jpg')
    res.writeHead(200, {'Content-Type': 'image/jpg'});
    res.end(img, 'binary');
})

app.listen(3000, () => {
    console.log("app is listening on port 3000");
})