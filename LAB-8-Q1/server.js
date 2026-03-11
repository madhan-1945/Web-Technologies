const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/studentnotes')
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.log(err));

// Note Schema
const noteSchema = new mongoose.Schema({
  title: String,
  subject: String,
  description: String,
  created_date: { type: Date, default: Date.now }
});

const Note = mongoose.model('Note', noteSchema);

// ADD Note
app.post('/notes', async (req, res) => {
  const note = new Note(req.body);
  await note.save();
  res.json(note);
});

// VIEW all Notes
app.get('/notes', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// UPDATE Note
app.put('/notes/:id', async (req, res) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(note);
});

// DELETE Note
app.delete('/notes/:id', async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: 'Note deleted!' });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));