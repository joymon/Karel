describe('Sample', function () {
    it('Hello test', function () {
        expect('test').toBe('test');
        console.log('Sample-Hello test : ' + 'Worked')
    });
});
describe('Karel-move', function () {
    it("Moving downwards 1 row change the row to 1", function () {
        var world = new World();
        var karel = new Karel(world);
        karel.turnLeft();
        karel.turnLeft();
        karel.move();
        expect(karel.row).toBe(1);
        console.log("Completed test:Moving downwards 1 row change the row to 1");
    });
});
