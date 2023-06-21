const Demo = artifacts.require("demo");

contract("demo test cases", () => {
  it("should setting the right value", async () => {
    const demo = await Demo.deployed();
    const value =(await demo.setnumber.call(10));
    expect (await value.toNumber()).to.equal(10);

    
  });
});
