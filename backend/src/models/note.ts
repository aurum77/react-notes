import { connect, model, Schema, Types } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGODB_URI;

interface INote {
  _id: Types.ObjectId;
  title: string;
  content: string;
  color: string;
  pinned: boolean;
  trashed: boolean;
  archived: boolean;
  tags: string[];
}

connect(url)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(`Error connecting to MongoDB: ${err.message}`);
  });

const noteSchema = new Schema<INote>(
  {
    _id: Types.ObjectId,
    title: String,
    content: String,
    color: String,
    pinned: Boolean,
    trashed: Boolean,
    archived: Boolean,
    tags: [String],
  },
  { collection: "notes", versionKey: false, timestamps: true }
);

noteSchema.set("toJSON", {
  transform(doc, ret, options) {
    ret.id = ret._id.toString();
    delete ret._id;
  },
});

export default model("Note", noteSchema);
