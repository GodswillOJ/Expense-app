// git clone repo_url
// To update your git repo from your terminal, you need the following commands
// git add .
// git commit -m "your commit message goes here"
// git push origin main

const express = require("express");
const app = express();
const port = 7000;

app.use(express.static(__dirname + "/docs"))
app.use(express.static("public"))
app.use("/images", express.static(__dirname + "public/images"))
app.use("/css", express.static(__dirname + "public/css"))
app.use("/js", express.static(__dirname + "public/js"))

app.set("views", "./")
app.set("view engine", "ejs")

app.get("", (req, res) => {
    res.render("index.ejs")
})
app.get("", (req, res) => {
    res.sendFile(__dirname + "/public/css/styles.css")
})

app.listen(port, () => console.info(`listening on port ${port}`))
