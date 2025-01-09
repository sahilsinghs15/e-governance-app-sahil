import mongoose, { Schema, Document } from "mongoose";



enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
}

enum Courses {
  IT = "IT", 
  CS = "CS",
  DS = "DS"
}

export interface studentInterface extends Document {
  userId: mongoose.Types.ObjectId;
  name: string;
  email: string;
  phone: number;
  dob: Date;
  gender: Gender;
  course: Courses;
  rollNo?: string;
  accepted?: boolean;
  admitted?: boolean;
}

// Define the Student Schema
const studentSchema = new Schema<studentInterface>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name : {
      type : String,
      trim : true, 
      required : true,
    },


    email : {
      type : String, 
      required : true,
      unique : true,
      lowercase  : true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },

    phone : {
      type: Number,
      required : true
    },

    dob : {
      type : Date,
      required :true
    },
    
    
    gender :{
      type : String,
      required :true ,
      enum  :   Object.values(Gender),
    },

    course : {
      type :String ,
      required :true ,
      enum : Object.values(Courses)
    },

    rollNo  :{ 
      type : String,
    },
    
    accepted :{
      type : Boolean ,
      default : false,
    },

    admitted : {
      type :Boolean ,
      default :false
    }
  },
   {
    timestamps : true
   }
);


const Student = mongoose.models.Student  || mongoose.model<studentInterface>("Student", studentSchema);


export default Student;
