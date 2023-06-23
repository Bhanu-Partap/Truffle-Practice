// const Demo = artifacts.require("demo");

// describe("demo test cases", () => {
//   it("should setting the right value", async (done) => {
//     // this.timeout(10000)
//     // let account = accounts[0];
//     const demo = await Demo.deployed();
//     await demo.setnumber(15);
//     // const value = await demo.getnumber.call();
//     // const value2 =  value.toNumber();
//     const number2 = await demo.number();
//     console.log("numb", number2);
//     assert.equal(number2, 15, "");
    
//   });
// });

// // expect(await demo.getnumber()).to.equal(number);
// // expect(await number).to.equal(15);


const SetContract = artifacts.require('set');
const { expect } = require('chai');

contract('SetContract', (accounts) => {
  let setInstance;

  before(async () => {
    setInstance = await SetContract.deployed();
  });

  it('should set and get the number correctly', async () => {
    const numberToSet = 42;
    
    await setInstance.setNumber(numberToSet);
    const number = await setInstance.getNumber();

    expect(Number(number)).to.equal(numberToSet);
  });
});