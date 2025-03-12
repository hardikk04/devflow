import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  bio: string;
  picture: string;
  location?: string;
  portfolioWebstie?: string;
  reputation?: number;
  saved: mongoose.Schema.Types.ObjectId[];
  joinedAt: Date;
}

const UserSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  bio: {
    type: String,
  },
  picture: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  portfolioWebsite: {
    type: String,
  },
  reputation: {
    type: Number,
    default: 0,
  },
  saved: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  joinedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
