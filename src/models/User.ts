import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["student", "admin", "superadmin"], // Allowed roles
      default: "student", // Default role is student
    },
  },
  { timestamps: true }
);

export const User = models.User || model("User", UserSchema);
