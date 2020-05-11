import Dice from "./../components/Dice";

describe("dice Mechainic", () => {
  test("example test", () => {
    const roll = Dice.getRoll();
    expect(typeof roll).toEqual("number");
  });
});
