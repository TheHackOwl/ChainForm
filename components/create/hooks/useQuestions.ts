import { useState } from "react";

import { Question } from "@/types";
import { insertAt } from "@/lib/utils";
import { getDefaultQuestion } from "@/constants/index";

/**
 * Custom hook for managing a list of questions
 * @param initialQuestions Initial list of questions
 * @returns Management functions and current state of questions
 */
export const useQuestions = (initialQuestions: Question[]) => {
  const [questionList, setQuestionList] =
    useState<Question[]>(initialQuestions);

  /**
   * Deletes a question from the list
   * @param index Index of the question to delete
   */
  const deleteQuestion = (index: number) => {
    if (questionList.length <= 1) return;
    setQuestionList((prevQuestions) =>
      prevQuestions.filter((_, i) => i !== index),
    );
  };

  /**
   * Copies a question in the list
   * @param index Index where to copy the question
   * @param question The question to copy
   */
  const copyQuestion = (index: number, question: Question) => {
    setQuestionList((prevQuestions) =>
      insertAt<Question>([...prevQuestions], index + 1, question),
    );
  };

  /**
   * Adds a new question to the list
   * @param index Index where to add the new question
   */
  const addQuestion = (index: number) => {
    setQuestionList((prevQuestions) =>
      insertAt<Question>([...prevQuestions], index + 1, getDefaultQuestion()),
    );
  };

  return {
    questionList,
    setQuestionList,
    deleteQuestion,
    copyQuestion,
    addQuestion,
  };
};
