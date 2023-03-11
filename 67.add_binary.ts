function addBinary(a: string, b: string): string {
  const offset = a.length - b.length;
  const long: string[] = offset > 0 ? a.split("") : b.split("");
  const short = offset > 0 ? b : a;
  let sum = 0;

  for (let i = long.length - 1; i >= 0; i--) {
    sum =
      parseInt(long[i]) + parseInt(short[i - Math.abs(offset)] || "0") + sum;
    long[i] = (sum % 2).toString();
    // set carry for next iteration
    sum = sum >= 2 ? 1 : 0;
  }

  return (sum == 0 ? "" : "1") + long.join("");
}
