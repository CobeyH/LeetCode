function canConstruct(ransomNote: string, magazine: string): boolean {
  let leftToFind = ransomNote.length;
  const neededLetters: { [key: string]: number } = {};
  for (const char of ransomNote) {
    neededLetters[char] = neededLetters[char] + 1 || 1;
  }

  for (const char of magazine) {
    if (leftToFind === 0) return true;
    if (!neededLetters[char]) continue;
    neededLetters[char] -= 1;
    leftToFind--;
  }
  return leftToFind === 0;
}

