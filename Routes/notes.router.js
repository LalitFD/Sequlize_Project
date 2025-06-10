import express from "express";
import multer from "multer";

import { uploadNotes, getNoteId, deleteById, titleName, updateNote } from "../Controller/Notes.controller.js";


const Nrouter = express.Router();

export const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
})

export const upload = multer({
    storage: storage
});

// Notes upload karne ka router 
Nrouter.post("/upload/:userId", upload.single('file'), uploadNotes);

// notes update karne ka router
Nrouter.patch('/update/:userId/:title', upload.single('file'), updateNote);

// get Notes using ID
Nrouter.get('/notes/:userId', getNoteId);

// Delete Notes using ID
Nrouter.delete('/delete/:userId', deleteById);

//// Delete Notes using ID and title
Nrouter.delete('/delete/:userId/:title', titleName);


//update karne ke liye notes ko 
// Nrouter.patch('/update/:userId/:title', updateNote)

export default Nrouter;