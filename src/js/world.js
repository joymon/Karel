//Class World
function World() {
    this.size = { rows: 9, cols: 9 };
    this.boardWidth = 0;
    this.boardHeight = 0;
}
World.prototype.getSize = function () {
    return this.size;
};
World.prototype.getCellSize = function () {
    return {w:this.boardWidth / this.cols,h:this.boardHeight / this.rows};
};
World.prototype.getCellCenter = function (row, col) {
    var cellWidth=this.boardWidth / this.size.cols;
    var cellHeight = this.boardHeight / this.size.rows;
    return { x:(col*cellWidth) + (cellWidth/2) , y: (row* cellHeight) + (cellHeight/2) };
};
