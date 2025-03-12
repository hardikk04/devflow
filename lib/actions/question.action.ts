"use server";

import { title } from "process";
import { connectToDatabase } from "../mongoose";
import QuestionModel from "@/database/question.model";

export async function createQuestion(params) {
  try {
    connectToDatabase();
    const question = await QuestionModel.create({
      title: params.title,
      content: params.explanation,
    });
    console.log(question);
  } catch (error) {
    console.log(error.message);
  }
}
