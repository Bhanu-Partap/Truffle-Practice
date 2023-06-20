const Demo = artifacts.require("demo")

// describe("Testcases", ()=>{
//     beforeEach(()=>{
//         const demo = 
//     })
//     it("should setting the number correctly",async()=>{

//     })
// })

Contract("demo test cases",()=>{
    it("should setting the right value",async()=>{
        const demo = await demo.deployed();
        const number = await demo.setnumber(15);
        expect(await number).to.equal(15);
    })
})