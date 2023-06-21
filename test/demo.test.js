const Demo = artifacts.require("demo");

contract("demo test cases", () => {
  it("should setting the right value", async () => {
    // this.timeout(10000)
    // let account = accounts[0];
    const demo = await Demo.deployed();
    const value =(await demo.setnumber(15));
    console.log(value);
    expect (await value[15]).to.equal(15);
    // assert.equal( value, 15, "lorem ipsum")
    // const conversion = (await value).toNumber();
    // const value = await demo.getnumber.call();
    // const value2 =  value.toNumber();
    // const number2 = await demo.number();
    // console.log("numb", number2);
    // assert.equal(number2, 15, "");
    
  });
});

// expect(await demo.getnumber()).to.equal(number);
// expect(await number).to.equal(15);
