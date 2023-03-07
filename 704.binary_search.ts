function search(nums: number[], target: number): number {
  if (!nums.length) return -1;
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = Math.trunc((start + end) / 2);
    if (target == nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}
