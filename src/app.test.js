const rewire = require("rewire")
const app = rewire("./app")
const AppController = app.__get__("AppController")
// @ponicode
describe("middlewares", () => {
    let inst

    beforeEach(() => {
        inst = new AppController()
    })

    test("0", () => {
        let callFunction = () => {
            inst.middlewares()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("rotes", () => {
    let inst

    beforeEach(() => {
        inst = new AppController()
    })

    test("0", () => {
        let callFunction = () => {
            inst.rotes()
        }
    
        expect(callFunction).not.toThrow()
    })
})
