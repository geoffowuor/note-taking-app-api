const express = require('express');
const Note = require ('../Models/notes');
const router = express.Router();

//create
router.post('/notes', async (req,res) => {
    try{
        const note = new Note(req.body);
        await note.save();
        res.status(201).send(note);
    }catch(error){
        res.status(500).send(error);
    }
    
});

// list all notes
router.get('/notes', async (req,res) => {
    try{
        const note = await Note.find();
        res.send(note);
    }catch(error){
        res.status(500).send(error);
    }
    
});

// list by id
router.get('/notes/:id', async (req,res) => {
    try{
        const note = await Note.findById();
        if (!note) return res.status(404).send();
        res.send(note);
    }catch(error){
        res.status(500).send(error);
    }
    
})
















module.exports = router;