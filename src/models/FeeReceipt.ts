
import mongoose, { Schema, Document, model } from "mongoose";


export interface IReceipt extends Document {
  studentId : mongoose.Types.ObjectId;
  amount : number;
  description : string;
  createdAt :Date ;
  updatedAt :Date;
}


const ReceiptSchema  :Schema = new Schema<IReceipt> (
  {
    studentId : {
      type : Schema.Types.ObjectId,
      ref : "Student",
      required :true
    },
    amount :{
      type : Number,
      required :true,
      min : 0
    },
    description  : {
      type : String,
      rqquired : true,
      trim : true
    }
  }
)



export default mongoose.models.Receipt || model<IReceipt>("Receipt" , ReceiptSchema);