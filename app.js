const express = require("express")
const app = express();
const artistsRouter = require("./routes/artistsRouter")
const artworksRouter = require("./routes/artworksRouter")
const dashboardRouter = require("./routes/dashboardRouter")
const path = require("path");

app.set('view engine', "ejs")
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use("/", artistsRouter);
app.use("/", dashboardRouter);
app.use("/", artworksRouter);



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));
