import { connect, Schema, model } from "mongoose";

const url = process.env.MONGODB_URI;

interface INote {
  id: string,
  title: string,
  content: string,
  color: string,
  pinned: boolean,
  trashed: boolean,
  archived: boolean,
  created: string,
  edited: string,
  tags: string[],
}

connect(url)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(`Error connecting to MongoDB: ${err.message}`);
  });

const noteSchema = new Schema<INote>({
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

export default model("Note", noteSchema);
