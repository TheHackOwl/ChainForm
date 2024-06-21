import { useEffect, useState } from "react";

import { getSubmissionById } from "@/app/actions";
import { SubmissionType, AnswerFormType } from "@/types";

/**
 * Custom hook to manage and fetch individual form data from a list of submissions with loading state.
 * 自定义Hook，用于管理和获取提交列表中的单个表单数据，并包含加载状态。
 *
 * @param {SubmissionType[]} submissions - Array of submission objects. 提交对象数组。
 * @param {number} initialIndex - Initial index of the individual submission to be fetched. 初始提交索引。
 *
 * @returns {object} Object containing current individual index, function to set individual, current form data, and loading state.
 * 返回一个包含当前提交索引、设置提交索引的函数、当前表单数据以及加载状态的对象。
 */
export const useIndividualFormData = (
  submissions: SubmissionType[],
  initialIndex: number = 1
) => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);
  const [formDataList, setFormDataList] = useState<AnswerFormType[]>([]);
  const [currentFormData, setCurrentFormData] = useState<
    AnswerFormType | undefined
  >();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (submissions.length === 0) return;
    fetchSubmissionData(submissions[currentIndex - 1].cid);
  }, []);

  /**
   * Sets the current individual index and fetches the corresponding form data if not already fetched.
   * 设置当前提交索引，并在未获取相应表单数据时进行获取。
   *
   * @param {number} index - The index of the individual submission to be set. 要设置的提交索引。
   */
  const setIndividualIndex = (index: number) => {
    if (submissions.length === 0) return;
    if (formDataList[index - 1]) {
      setCurrentFormData(formDataList[index - 1]);
    } else {
      fetchSubmissionData(submissions[index - 1].cid);
    }
    setCurrentIndex(index);
  };

  /**
   * Fetches the submission data by CID and updates the state.
   * 通过CID获取提交数据并更新状态。
   *
   * @param {string} cid - The CID of the submission to fetch. 要获取的提交的CID。
   */
  const fetchSubmissionData = async (cid: string) => {
    setLoading(true); // Set loading state to true
    try {
      const submissionData = await getSubmissionById(cid);

      console.log(submissionData, "submissionData");

      setCurrentFormData(submissionData);

      setFormDataList((prev) => {
        const updatedFormDataList = [...prev];

        updatedFormDataList[currentIndex - 1] = submissionData;

        return updatedFormDataList;
      });
    } catch (error) {
      console.error("getSubmissionById错误", error);
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  return {
    currentIndex,
    currentFormData,
    loading,
    setIndividualIndex,
  };
};
