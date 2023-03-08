function minWindow(s: string, t: string): string {
  console.profile();
  //
  //
  // Create a string S1 that stores the current shortest window that contains t
  let S1 = "";
  // Create a pointer P1 that stores the furthest left index that the second map holds
  let leftPointer = Number.MAX_VALUE;
  // Create map M1 that stores the number of occurances for each letter in t
  let charsToFind = t.length;
  const occurances = [...t].reduce(
    (res: { [key: string]: number }, char: string) => (
      (res[char] = (res[char] || 0) + 1), res
    ),
    {}
  );

  // Create map M2 that stores a list of indexes of the locations of letters in t contained in s.
  const positions: { [key: string]: number[] } = {};
  for (const [key, value] of Object.entries(occurances)) {
    positions[key] = Array(value);
  }

  // To start, iterate through s, checking if each letter has a non-zero entry in M1.
  [...s].forEach((char: string, inx: number) => {
    if (!(char in occurances)) return;
    const leftToFind = occurances[char];
    // If it does, decrement that entry by 1, then push the current index in s to M2 and decrement R1
    if (leftToFind !== 0) {
      occurances[char] -= 1;
      charsToFind--;
      if (inx < leftPointer) leftPointer = inx;
      // If R1 becomes empty, fill S1 with substring between P1 and the current index.
      // This is the first matching window.
      if (charsToFind === 0) {
        S1 = s.slice(leftPointer, inx + 1);
      }
    }
    // Shift the queue in M2 for that character entry.
    const popped = positions[char].shift();
    positions[char].push(inx);

    // If the element popped off R2 is the same index as P1, set P1 to the next further left element in M2.
    if (popped !== undefined && popped === leftPointer) {
      leftPointer = Number.MAX_VALUE;
      for (const [key, value] of Object.entries(positions)) {
        const lowest = value.find((v: number | undefined) => v !== undefined);
        if (lowest && lowest < leftPointer) {
          leftPointer = lowest;
        }
      }
      const S2 = s.slice(leftPointer, inx + 1);
      if (S2.length < S1.length) S1 = S2;
    }
  });

  console.profileEnd();

  return S1;
}

const s = "abaaaaaaabcabaceuhasoeuv;qjkhoeud,p.gaeoud";
const t = "uesaa";
minWindow(s, t);
