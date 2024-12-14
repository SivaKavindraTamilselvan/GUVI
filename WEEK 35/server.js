const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create an Express app
const app = express();
const PORT = 3000;

// Use body-parser middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mentor_student_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Mentor Schema
const mentorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const Mentor = mongoose.model('Mentor', mentorSchema);

// Student Schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  assignedMentor: { type: mongoose.Schema.Types.ObjectId, ref: 'Mentor', default: null },
});

const Student = mongoose.model('Student', studentSchema);

// 1. Create Mentor (with duplicate email check)
app.post('/mentor', async (req, res) => {
  try {
    const { name, subject, email } = req.body;

    // Check if mentor with the same email exists
    const existingMentor = await Mentor.findOne({ email });
    if (existingMentor) {
      return res.status(400).send({ message: 'Mentor with this email already exists' });
    }

    const mentor = new Mentor({ name, subject, email });
    await mentor.save();
    res.status(201).send(mentor);
  } catch (err) {
    res.status(400).send({ message: 'Error creating mentor', error: err.message });
  }
});

// 2. Create Student
app.post('/student', async (req, res) => {
  try {
    const { name, email } = req.body;
    const student = new Student({ name, email });
    await student.save();
    res.status(201).send(student);
  } catch (err) {
    res.status(400).send({ message: 'Error creating student', error: err.message });
  }
});

// 3. Assign a student to a mentor
app.post('/assign-mentor', async (req, res) => {
  const { studentId, mentorId } = req.body;

  if (!studentId || !mentorId) {
    return res.status(400).json({ message: "Student ID and Mentor ID are required" });
  }

  try {
    // Find the student and mentor by their IDs
    const student = await Student.findById(studentId);
    const mentor = await Mentor.findById(mentorId);

    if (!student || !mentor) {
      return res.status(404).json({ message: "Student or Mentor not found" });
    }

    // Assign the mentor to the student
    student.assignedMentor = mentor._id;
    await student.save();

    res.status(200).json({ message: "Mentor assigned successfully", student });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error assigning mentor", error: err.message });
  }
});

// 4. Get all students for a particular mentor
app.get('/mentor/:mentorId/students', async (req, res) => {
  try {
    const mentorId = req.params.mentorId;
    const students = await Student.find({ assignedMentor: mentorId });
    res.status(200).send(students);
  } catch (err) {
    res.status(400).send({ message: 'Error fetching students', error: err.message });
  }
});

// 5. Get previously assigned mentor for a student
app.get('/student/:studentId/mentor', async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const student = await Student.findById(studentId).populate('assignedMentor');
    if (!student) {
      return res.status(404).send({ message: 'Student not found' });
    }
    res.status(200).send(student.assignedMentor);
  } catch (err) {
    res.status(400).send({ message: 'Error fetching mentor', error: err.message });
  }
});

// 6. List all students who do not have a mentor
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find({ assignedMentor: null });
    res.status(200).send(students);
  } catch (err) {
    res.status(400).send({ message: 'Error fetching students', error: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
