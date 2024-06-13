import { useRef } from "react";

/**
 * Interface representing methods to aggregate data and check status.
 * 表示聚合数据和检查状态方法的接口。
 *
 * @template T The type of data returned by the aggregateData method.
 * @template T aggregateData 方法返回的数据类型。
 */
export interface FancyMethods<T> {
  aggregateData: () => T;
  checkStatus: () => boolean;
}

/**
 * A custom hook that manages an array of references to components or objects implementing the FancyMethods interface.
 * 它提供了一种方法来获取所有引用组件或对象的聚合数据，并检查所有子组件的状态。
 *
 * @template T The type of data returned by the aggregateData method.
 * @template T aggregateData 方法返回的数据类型。
 *
 * @returns {{
 *   refs: React.MutableRefObject<FancyMethods<T>[]>;
 *   aggregateData: () => T[];
 *   checkAllComponentsStatus: () => boolean;
 * }} An object containing the refs array and methods to retrieve aggregated data and check all components' status.
 * 包含 refs 数组和获取聚合数据及检查所有组件状态的方法的对象。
 *
 * @example
 * const { refs, aggregateData, checkAllComponentsStatus } = useAggregateRefData<Question>();
 *
 * // Use refs to reference child components
 * // 使用 refs 来引用子组件
 *
 * // Call aggregateData to get aggregated data from all child components
 * // 调用 aggregateData 获取所有子组件的聚合数据
 *
 * // Call checkAllComponentsStatus to check if all components' status are correct
 * // 调用 checkAllComponentsStatus 检查所有组件的状态是否正确
 * const allStatusCorrect = checkAllComponentsStatus();
 */
export const useAggregateRefData = <T>() => {
  const refs = useRef<FancyMethods<T>[]>([]);

  /**
   * Aggregates data from all referenced components or objects.
   * 聚合所有引用组件或对象的数据。
   *
   * @returns {T[]} An array of aggregated data from all refs.
   * @returns {T[]} 一个包含所有 refs 的聚合数据的数组。
   */
  const aggregateData = () => {
    return refs.current.map((ref) => ref.aggregateData());
  };

  /**
   * Checks the status of all referenced components or objects.
   * 检查所有引用组件或对象的状态。
   *
   * @returns {boolean} True if all components' status are correct, false otherwise.
   * @returns {boolean} 如果所有组件的状态都正确，则返回 true，否则返回 false。
   */
  const checkAllComponentsStatus = () => {
    return refs.current.every((ref) => ref.checkStatus());
  };

  return {
    refs,
    aggregateData,
    checkAllComponentsStatus,
  };
};
