//wallet/payFine

import {NextResponse} from "next/server";
import {connectToDB} from "@/db/mongo";
import Wallet from "@/models/Wallet";
import Fine from "@/models/Fine";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import Student from "@/models/Student_Registration";
import Transaction from "@/models/Transaction";

export async function POST(req : Request){
  try{
    await connectToDB();
    const session = await getServerSession(authOptions);
    if(!session){
      return NextResponse.json({
        error : "Unauthorized"
      },{status : 401})
    }

    const student = await Student.findById(session.user.id);
    if(!student){
      return NextResponse.json({
        error : "student not found"
      },{status : 404})
    }

    const studentId = student._id;
    const {fineId} = await req.json();

    if(!studentId || !fineId){
      return NextResponse.json({
        error : "Student if and fine id are required"
      },{status : 400})
    }

    const fine = await Fine.findOne({_id : fineId , studentId});
    if(!fine){
      return NextResponse.json({
        error : "Fine not found for the given student"
      },{status : 404})
    }

    const wallet = await Wallet.findOne({studentId});
    if(!wallet){
      return NextResponse.json({
        error : "wallet not found for the student"
      },{status : 404})
    }

    if(wallet.balance < fine.amount){
      return NextResponse.json({
        error : "Insufficient balance to pay the fine"
      },{status : 400})
    }

    wallet.balance -= fine.amount;
    await wallet.save();

    await Fine.findByIdAndDelete(fineId);
    const transaction = new Transaction({
        walletId : wallet._id,
        amount : fine.amount,
        description : `Fine payment for ${fine.type}`,
      })

      await transaction.save();
      return NextResponse.json({
        message : "Fine paid succesfully",
        remainingBalance : wallet.balance,
      },{status : 200})
  }catch(error){
    console.error(error);
    return NextResponse.json({
      error : "Internal server error"
    },{status : 500})
  }
}