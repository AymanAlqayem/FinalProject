import { expect } from "chai";
import { shuffle } from "../src/shuffle.js"; // Note the .js extension

describe("shuffle", () => {
  it("should maintain the same array length", () => {
    const arr = [1, 2, 3, 4];
    const shuffled = shuffle([...arr]);
    expect(shuffled).to.have.lengthOf(arr.length);
  });

  it("should contain the same elements", () => {
    const arr = [1, 2, 3, 4];
    const shuffled = shuffle([...arr]);
    expect(shuffled).to.have.members(arr);
  });

  it("should rearrange the elements", () => {
    const arr = [1, 2, 3, 4];
    let isShuffled = false;
    for (let i = 0; i < 10; i++) {
      const shuffled = shuffle([...arr]);
      const isSameOrder = arr.every((val, idx) => val === shuffled[idx]);
      if (!isSameOrder) {
        isShuffled = true;
        break;
      }
    }
    expect(isShuffled).to.be.true;
  });
});
