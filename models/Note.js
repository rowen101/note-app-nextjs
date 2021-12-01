const mongoose = required("mongoose");

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    unique: true,
    trim: true,
    maxLenght: [40, "Title cannot be more than 40 characters"],
  },
  description: {
    type: String,
    required: true,
    maxLenght: [200, "Description cannot be more than 200 characters"],
  },
});

module.exports = mongoose.models.Note || mongoose.model("Note", NoteSchema);
