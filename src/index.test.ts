describe("./index",  ()=> {
    it("should not crash since require(./index) sets require.main to false", () => {
        expect(require("./index")).toBeDefined();
    })
});