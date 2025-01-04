import mongoose, { Schema, Document } from "mongoose";

export interface IStudentR extends Document {
  name: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: Date;
  gender: string;
  course: string;
  marksheet: string;
  isVerified: boolean;
  walletBalance: number;
}

const StudentRSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  course: { type: String, required: true },
  marksheet: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  walletBalance: { type: Number, default: 0 },
});

// Check if the model already exists in mongoose.models to prevent overwriting
export default mongoose.models.StudentRegistration ||
  mongoose.model<IStudentR>("StudentRegistration", StudentRSchema);
