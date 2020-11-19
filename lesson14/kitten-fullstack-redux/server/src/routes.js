module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  router.get('/', async (req, res) => {
    const kittens = await db.getKittens();
    res.json(kittens);
  });

  router.get('/:id', async(req, res) => {
    const id = req.params.id;
    const kitten = await db.getKitten(id);
    res.json(kitten);
  });

  router.post('/', async (req, res) => {
    const kitten = {
      name: req.body.name,
      hobbies: [] // Empty hobby array
    };
    const newKitten = await db.createKitten(kitten);
    res.json(newKitten);
  });

  router.post('/:id/hobbies', async (req, res) => { 
    const updatedKitten = await db.addHobby(req.params.id, req.body.hobby);
    console.log("updatedKitten", updatedKitten);
    res.json(updatedKitten);
  });

  return router;
};