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
        res.status(400).send(error);
    }
    
});

// list
router.get('/notes', async (req,res) => {
    try{
        const note = await Note.find();
        res.send(note);
    }catch(error){
        res.status(500).send(error);
    }
    
});
















module.exports = router;