function distance(p1: number[]) {
  // We can just use p1 because subtracting 0,0 from the origin won't change the math
  return p1[0] * p1[0] + p1[1] * p1[1];
}

function kClosest(points: number[][], k: number): number[][] {
  points.forEach((p: number[], inx: number) => {
    points[inx].push(distance(p));
  });
  points.sort((a, b) => (a[2] > b[2] ? 1 : -1));
  // Return the first two numbers of the first k elements.
  return points.slice(0, k).map((p: number[]) => p.slice(0, 2));
}
