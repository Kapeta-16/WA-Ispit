import express from 'express'
import  {ratings}  from "./data/ratings.js"
const router = express.Router()

router.post("/", (req, res) => {
    let novi_rating = req.body;
    const movie = req.body.naziv;
    let novi_id = ratings.length() + 1;

    if(!movie){
        return res.status(404).json({greska: "Movie not found"});
    }else if(ratings.ocjena < 1 || ratings.ocjena > 10){
        return res.status(400).json({greska:"Ocjena nije u rasponu 1-10"})
    }else{
        ratings.push(novi_id, ...novi_rating)
    }
})

router.get("/:naziv", (req, res) => {
    
    const movie = req.body.naziv;
 

    if(!movie){
        return res.status(404).json({greska: "Movie not found"});
    }else if(!ratings){
        return res.status(404).json({greska:"Nema ratinga"})
    }
})
