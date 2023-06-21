const Demo = artifacts.require("demo");

contract("demo test cases", () => {
  it("should setting the right value", async () => {
    const demo = await Demo.deployed();
    const value =(await demo.setnumber.call(10));
    expect (await value.toNumber()).to.equal(10);
  });

  it("another is returning the right value", async()=>{
    const demo = await Demo.deployed();
    const value =(await demo.setnumber.call(10));
    console.log(await demo.getnumber());
    const fun = (await demo.getnumber());
    expect (await fun.toNumber()).to.equal(10);
  })
});
