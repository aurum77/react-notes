const mongoose = require("mongoose");
const url = process.env.MONGODB_URI;

mongoose
  .connect(url)
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log(`error connecting to MongoDB: ${err.message}`);
  });

const noteSchema = new mongoose.Schema({
  id: String,
  title: String,
  content: String,
  color: String,
  pinned: Boolean,
  trashed: Boolean,
  archived: Boolean,
  created: Date,
  edited: Date,
  tags: [String],
},
  {collection: "notes"});

noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Note", noteSchema);
