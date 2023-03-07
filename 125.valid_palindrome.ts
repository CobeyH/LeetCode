function isPalindrome(s: string): boolean {
  // Remove whitespace, non-alpha chars, lowercase word and split into array
  let strArr = s
    .toLowerCase()
    .replace(/[^A-Za-z0-9]/g, "")
    .split("");
  let start = 0;
  let end = strArr.length - 1;
  while (start < end) {
    if (strArr[start] !== strArr[end]) return false;
    start++;
    end--;
  }
  return true;
}
