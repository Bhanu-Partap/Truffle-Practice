// const Demo = artifacts.require("demo");

// contract("demo test cases", () => {
//   it("should setting the right value", async () => {
//     const demo = await Demo.deployed();
//     const value =(await demo.setnumber.call(10));
//     expect (await value.toNumber()).to.equal(10);
//   });

//   it("another is returning the right value", async()=>{
//     const demo = await Demo.deployed();
//     const value =(await demo.setnumber.call(10));
//     console.log(await demo.getnumber());
//     const fun = (await demo.getnumber());
//     expect (await fun.toNumber()).to.equal(10);
//   })
// });

const SetContract = artifacts.require('demo');
const { expect } = require('chai');

contract('SetContract', (accounts) => {
  let setInstance;

  before(async () => {
    setInstance = await SetContract.deployed();
  });

  it('should set and get the number correctly', async () => {
    const numberToSet = 42;
    
    await setInstance.setnumber(numberToSet);
    const number = await setInstance.getnumber();
    console.log(number);
    expect(Number(number)).to.equal(numberToSet);
  });
});