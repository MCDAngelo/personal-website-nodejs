import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 3001;
const app = express();


app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/about", (req, res) => {
    res.render("about.ejs");
})

app.get("/academic-work", (req, res) => {
    res.render("academics.ejs");
})

app.get("/development-work", (req, res) => {
    res.render("dev_work.ejs");
})

app.get("/adventures", (req, res) => {
    res.render("adventures.ejs");
})

app.get("/art", (req, res) => {
    res.render("art_work.ejs");
})

app.get('/cv', (req, res) => {
	res.sendFile(`${__dirname}/public/pdfs/MCDAngelo-AcademicCV-Oct2024.pdf`);
});

app.get('/arts-cv', (req, res) => {
	res.sendFile(`${__dirname}/public/pdfs/MCDAngelo-ArtsCV-Oct2024.pdf`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})