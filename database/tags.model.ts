import mongoose from "mongoose";

export interface ITags extends mongoose.Document {
  name: string;
  description: string;
  questions: mongoose.Schema.Types.ObjectId[];
  followers: mongoose.Schema.Types.ObjectId[];
  createdOn: Date;
}

const TagsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  createdOn: { type: Date, default: Date.now() },
});

const Tags = mongoose.models.Tags || mongoose.model("Question", TagsSchema);
export default Tags;
