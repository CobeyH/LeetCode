function climbStairs(n: number): number {
  if (n === 1) {
    return 1;
  }

  let left = 1;
  let right = 2;
  let temp = right;

  for(let i = 3; i <= n; i++) {
      temp = right;
      right = right + left;
      left = temp;
  }

  return right;

};
