const Api = require("./Api")
// @ponicode
describe("Api.default", () => {
    test("0", () => {
        let callFunction = () => {
            Api.default()
        }
    
        expect(callFunction).not.toThrow()
    })
})
