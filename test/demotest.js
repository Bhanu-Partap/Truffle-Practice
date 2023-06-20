const Demo = artifacts.require("demo")

describe("demo test cases",()=>{
    it("should setting the right value",async()=>{
        const demo = await Demo.deployed();
        // const number = await demo.setnumber(15);
        expect(await demo.setnumber.call(10)).to.equal(10);
    })
})