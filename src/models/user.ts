import mongoose, { Schema, models, model } from "mongoose";
import { nanoid } from "nanoid";

export type UserDocument = {
  userId?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
};

const userSchema = new Schema<UserDocument>(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
      default: () => `user-${nanoid(12)}`,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.index({email: 1, userId: 1});

export const User = (models.User as mongoose.Model<UserDocument>) ?? model<UserDocument>("User", userSchema);