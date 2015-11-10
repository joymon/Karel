var KarelDrawer = (function () {
    function KarelDrawer(karel, canvas) {
        this.smallCircleRadius = 2;
        this.largeCircleRadius = 5;
        this.karel = karel;
        this.context = canvas.getContext("2d");
    }
    KarelDrawer.prototype.draw = function () {
        var cellCenter = this.karel.world.getCellCenter(this.karel.row, this.karel.col);
        if (this.karel.direction === undefined) {
            throw "Direction is empty";
        }
        switch (this.karel.direction) {
            case Direction.North:
                this.circle(this.context, cellCenter.x, cellCenter.y - this.smallCircleRadius, this.smallCircleRadius);
                this.circle(this.context, cellCenter.x, cellCenter.y + this.largeCircleRadius, this.largeCircleRadius);
                break;
            case Direction.West:
                this.circle(this.context, cellCenter.x - this.smallCircleRadius, cellCenter.y, this.smallCircleRadius);
                this.circle(this.context, cellCenter.x + this.largeCircleRadius, cellCenter.y, this.largeCircleRadius);
                break;
            case Direction.South:
                this.circle(this.context, cellCenter.x, cellCenter.y + this.smallCircleRadius, this.smallCircleRadius);
                this.circle(this.context, cellCenter.x, cellCenter.y - this.largeCircleRadius, this.largeCircleRadius);
                break;
            case Direction.East:
                this.circle(this.context, cellCenter.x + this.smallCircleRadius, cellCenter.y, this.smallCircleRadius);
                this.circle(this.context, cellCenter.x - this.largeCircleRadius, cellCenter.y, this.largeCircleRadius);
                break;
        }
    };
    KarelDrawer.prototype.circle = function (context, x, y, radius) {
        context.beginPath();
        context.strokeStyle = "red";
        context.lineWidth = 1;
        context.arc(x, y, radius, 0, (Math.PI / 180) * 360, false);
        context.stroke();
        context.closePath();
    };
    return KarelDrawer;
})();