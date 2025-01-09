import mongoose, { Schema, Document } from "mongoose";


interface IWallet extends Document  {
  studentId  : mongoose.Types.ObjectId;
  balance : number;
}

const WalletSchema : Schema =  new Schema<IWallet> (
  {
    studentId : {
      type : mongoose.Schema.Types.ObjectId,
      required : true, 
      ref: "Student",
    },

    balance : {
      type : Number,
      required : true,
      default : 500,
    },
  },
  {
    timestamps : true
  }
)

const Wallet  = mongoose.models.Wallet || mongoose.model<IWallet>("Waller" , WalletSchema);


export default Wallet;
