function orangesRotting(grid: number[][]): number {
  enum cellType {
    empty,
    fresh,
    rotten,
  }

  interface cell {
    x: number;
    y: number;
  }

  function getNeighbours(parent: cell) {
    let neighbours: cell[] = [];
    // Left
    if (parent.x > 0) neighbours.push({ x: parent.x - 1, y: parent.y });
    // Right
    if (parent.x < grid[0].length - 1)
      neighbours.push({ x: parent.x + 1, y: parent.y });
    // Up
    if (parent.y > 0) neighbours.push({ x: parent.x, y: parent.y - 1 });
    // Down
    if (parent.y < grid.length - 1)
      neighbours.push({ x: parent.x, y: parent.y + 1 });
    return neighbours.filter((c: cell) => grid[c.y][c.x] === cellType.fresh);
  }

  function getOrangesOfType(type: cellType): cell[] {
    const matching: cell[] = [];
    grid.forEach((row: number[], rowNum: number) => {
      row.forEach((col: number, colNum: number) => {
        if (grid[rowNum][colNum] === type) {
          matching.push({ x: colNum, y: rowNum });
        }
      });
    });

    return matching;
  }

  const rottenOranges = getOrangesOfType(cellType.rotten);
  let toVisit: cell[] = [];
  rottenOranges.forEach((rot: cell) => toVisit.push(...getNeighbours(rot)));
  let iterations = 0;
  while (toVisit.length > 0) {
    iterations++;
    let newFresh: cell[] = [];
    toVisit.forEach((c: cell) => {
      grid[c.y][c.x] = cellType.rotten;
    });
    toVisit.forEach((c: cell) => {
      newFresh.push(...getNeighbours(c));
    });
    toVisit = newFresh;
  }
  return getOrangesOfType(cellType.fresh).length > 0 ? -1 : iterations;
}
