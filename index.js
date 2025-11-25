import express from 'express'
import moviesRouter from "./routes/router_movies.js"

const app = express();
app.use(express.json());
app.use("/router_movies", moviesRouter)
const PORT = 3000;

 

app.listen(PORT, error => {
    if(error){
        return "ne radi"
    }else{
        return PORT
    }
})


app.get("/", (req, res) => {
    res.sendFile("./views/index.html")
})




