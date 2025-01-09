import mongoose, { Schema, Document } from "mongoose";



export interface IPaymentWallet extends Document {
  studentId : string;
  balance : number;
  transactions : {
    type : string;
    amount : number;
    data :Date
  }[];
}



const PaymentWalletSchema :Schema = new Schema(
  {
    studentId :  {
      type : Schema.Types.ObjectId,
      ref : "Student",
      required :true,
    },
    balance : {
      type :Number,
      required :true,
    },
    transactions : [
      {
        type : {
          type :String ,
          required :true,
        },
        amount : {
          type :Number,
          required : true,
        },
        date : {
          type :Date,
          default : Date.now
        }
      }
    ]
  }
)


export default mongoose.models.PaymentWallet || mongoose.model<IPaymentWallet>("PaymentWallet" , PaymentWalletSchema);


