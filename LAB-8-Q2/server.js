const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bookfinder')
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.log(err));

// Book Schema
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  category: String,
  price: Number,
  rating: Number,
  year: Number
});

const Book = mongoose.model('Book', bookSchema);

// Insert sample books (run once)
async function insertSampleBooks() {
  const count = await Book.countDocuments();
  if (count === 0) {
    await Book.insertMany([
      { title: "JavaScript Essentials", author: "John Smith", category: "Programming", price: 450, rating: 4.5, year: 2023 },
      { title: "Python Basics", author: "Alice Brown", category: "Programming", price: 350, rating: 4.2, year: 2022 },
      { title: "MongoDB Guide", author: "Ravi Kumar", category: "Database", price: 500, rating: 4.8, year: 2023 },
      { title: "Web Design Fundamentals", author: "Sara Lee", category: "Design", price: 299, rating: 3.9, year: 2021 },
      { title: "Node.js in Action", author: "Mike Johnson", category: "Programming", price: 599, rating: 4.6, year: 2022 },
      { title: "React for Beginners", author: "Emma Davis", category: "Programming", price: 420, rating: 4.3, year: 2023 },
      { title: "SQL Mastery", author: "David Wilson", category: "Database", price: 380, rating: 4.1, year: 2021 },
      { title: "UI/UX Design Guide", author: "Priya Patel", category: "Design", price: 320, rating: 4.7, year: 2022 },
      { title: "Data Structures", author: "James Clark", category: "Computer Science", price: 550, rating: 4.4, year: 2023 },
      { title: "Machine Learning 101", author: "Sophia White", category: "AI", price: 650, rating: 4.9, year: 2023 },
      { title: "CSS Advanced", author: "Liam Martin", category: "Design", price: 250, rating: 3.8, year: 2021 },
      { title: "Express.js Handbook", author: "Olivia Turner", category: "Programming", price: 480, rating: 4.0, year: 2022 }
    ]);
    console.log('Sample books inserted!');
  }
}
insertSampleBooks();

// 1. SEARCH books by title
app.get('/books/search', async (req, res) => {
  const { title } = req.query;
  const books = await Book.find({ title: { $regex: title, $options: 'i' } });
  res.json(books);
});

// 2. FILTER books by category
app.get('/books/category/:category', async (req, res) => {
  const books = await Book.find({ category: req.params.category });
  res.json(books);
});

// 3. SORT books by price or rating
app.get('/books/sort/:field', async (req, res) => {
  const field = req.params.field;
  const order = field === 'rating' ? -1 : 1;
  const books = await Book.find().sort({ [field]: order });
  res.json(books);
});

// 4. TOP RATED books
app.get('/books/top', async (req, res) => {
  const books = await Book.find({ rating: { $gte: 4 } }).sort({ rating: -1 }).limit(5);
  res.json(books);
});

// 5. PAGINATION
app.get('/books', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 5;
  const skip = (page - 1) * limit;
  const books = await Book.find().skip(skip).limit(limit);
  const total = await Book.countDocuments();
  res.json({ books, total, page, totalPages: Math.ceil(total / limit) });
});

app.listen(3001, () => console.log('Server running on http://localhost:3000'));