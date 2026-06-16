


import mongoose, { Schema, models, model } from "mongoose";
import { nanoid } from "nanoid";

export type TransactionDocument = {
    transactionId: string;
    name: string;
    category: string;
    amount: number;
    date: Date;
    type: "income" | "expense";
    createdAt?: Date;
    updatedAt?: Date;
}

const transactionSchema = new Schema<TransactionDocument>({
    transactionId:{
        type: String,
        required: true,
        unique: true,
        default: () => `transaction-${nanoid(12)}`
    },
    name:{
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    type: {
        type: String,
        enum: ["income", "expense"],
        required: true
    }
},{
    timestamps: true
})

transactionSchema.index({transactionId: 1});

export const Transaction = (models.Transaction as mongoose.Model<TransactionDocument>) ?? model<TransactionDocument>("Transaction", transactionSchema);




