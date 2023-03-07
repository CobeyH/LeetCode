function isAnagram(s: string, t: string): boolean {
  let sArr = s.split("");
  let tArr = t.split("");

  const map = new Map();
  sArr.forEach((c: string) => {
    const count = map.get(c) || 0;
    map.set(c, count + 1);
  });

  const conflict = tArr.some((c: string) => {
    const count = map.get(c);
    if (!count) return true;
    if (count === 1) {
      map.delete(c);
    } else {
      map.set(c, count - 1);
    }
    return false;
  });
  return !conflict && map.size === 0;
}

