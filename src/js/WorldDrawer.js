var WorldDrawer = (function () {
    function WorldDrawer(world, canvas) {
        this.world = world;
        this.context = canvas.getContext("2d");
    }
    WorldDrawer.prototype.draw = function () {
        this.context.strokeStyle = "black";
        this.world.boardWidth = this.context.canvas.width;
        this.world.boardHeight = this.context.canvas.height;
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.drawAllSquares(0, 0);
    };
    WorldDrawer.prototype.drawAllSquares = function (x, y) {
        this.context.strokeStyle = "grey";
        var cellWidth = this.world.boardWidth / this.world.getSize().cols;
        var cellHeight = this.world.boardHeight / this.world.getSize().rows;
        // draw all 81 little squares
        this.context.lineWidth = 1;
        for (var row = 0; row < this.world.getSize().rows; row++) {
            this.drawSquaresForRow(row, cellWidth, cellHeight);
        }
    };
    WorldDrawer.prototype.drawSquaresForRow = function (row, cellWidth, cellHeight) {
        var x = 0, y = 0;
        for (var col = 0; col < this.world.getSize().cols; col++) {
            this.context.strokeRect(x + (col * cellWidth), y + (row * cellHeight), cellWidth, cellHeight);
        }
    };
    return WorldDrawer;
})();
//# sourceMappingURL=WorldDrawer.js.map