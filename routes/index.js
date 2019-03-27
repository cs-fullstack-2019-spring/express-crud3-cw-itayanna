var express = require('express');
var router = express.Router();
var PokemonCollection = require('../models/pokemonDataModel');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// rout to create pokemon
router.post('/pokedex/pokemon',(req, res)=>{

  PokemonCollection.create(
      {
        pokedex_number: req.body.pokedex_number,
        name: req.body.name,
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense,
        speed: req.body.speed,
        sp_atk: req.body.sp_atk,
        sp_def: req.body.sp_def,
        main_type: req.body.main_type
      }, (errors)=>{
        if (errors) res.send(errors);
        else{
          res.redirect('/');
        }
      }
  )
});


// route to fine a pokemon
router.get('/pokedex/pokemon/:id',(req, res)=>{
    PokemonCollection.find({pokedex_number:req.params.id}, (errors, results)=>{
        if (errors) res.send(errors);
        else res.send(results);})
});


// route to update a pokemon
router.put('/pokedex/pokemon/:id',(req, res)=>{
    PokemonCollection.updateOne(
        {
            pokedex_number: req.body.pokedex_number,
            name: req.body.name,
            hp: req.body.hp,
            attack: req.body.attack,
            defense: req.body.defense,
            speed: req.body.speed,
            sp_atk: req.body.sp_atk,
            sp_def: req.body.sp_def,
            main_type: req.body.main_type
        }, (errors)=>{
            if (errors) res.send(errors);
            else res.redirect("/");
        }
    )
});


// route to delete a pokemon
router.delete('/pokedex/pokemon/:id',(req, res)=>{
    PokemonCollection.deleteOne(
        {
            pokedex_number: req.params.id,
        }, (error)=>{
            if (error) res.send(error);
            else res.redirect('/');
        }
    )
});


// route to see all pokemon
router.get('/pokedex/pokemon',(req, res)=>{
    PokemonCollection.find({}, (errors, results)=>{
        if (errors) res.send(errors);
        else res.send(results);})
});


module.exports = router;
