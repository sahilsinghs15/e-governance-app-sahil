import mongoose, { Schema, model, models } from "mongoose";

const StudentSchema = new Schema(
  {
    username: { type: String  , required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const Student= models.User || model("User", StudentSchema);
