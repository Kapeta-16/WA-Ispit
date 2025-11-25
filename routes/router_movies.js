import express from 'express'
import  {movies}  from "../data/movies.js"
const router = express.Router()


router.get("/", (req, res) => {
    req.params;
    return res.status(200).json(movies);
})

router.get("/:naziv", (req, res) => {
    const movie = req.params;
    if(!movie){
        return res.status(404).json({greska:"Movie not found"});
    }else{
    return res.status(200).json(movies.body);
    }
})

router.post("/", (req, res) => {
    const novi_film = req.body;
    const novi_naziv = req.body.naziv;

    let provjera_naziva = movie => movie.naziv == novi_naziv;
    if(provjera_naziva){
        return res.status(400).json({geska:"film vec postoji"})
    }else{
        let novi_id = movies.length() + 1;
      movies.push(novi_id, ...novi_film)
    }

    movies.push(novi_film)
})

router.delete("/:id", (req, res) => {
    const movieId = req.body.id;

    if(movieId){
        movies.splice(movieId, 1);
        return res.status(200).json({poruka:"Film je uspjesno izbrisan"})
    }else{
        return res.status(404).json({greska:"Movie not found"})
    }
  

})

export default router