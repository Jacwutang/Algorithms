// Given a collection of intervals, merge all overlapping intervals.
//
// Example 1:
//
// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:
//
// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considerred overlapping.

var merge = function(intervals) {
  intervals = intervals.sort((a, b) => a.start - b.start);

  let max = Number.MIN_SAFE_INTEGER;
  let merged = [];
  for (let interval of intervals) {
    if (merged.length == 0 || merged.slice(-1)[0][1] < interval.start) {
      merged.push([interval.start, interval.end]);
    } else {
      max = Math.max(interval.end, merged.slice(-1)[0][1]);

      merged[merged.length - 1] = [merged[merged.length - 1][0], max];
    }
  }

  return merged;
};
