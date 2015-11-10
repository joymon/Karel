
function Karel( world) {
    this.row = 0;
    this.col = 0;
    this.direction = "N";
    this.world = world;
    this.move = function () {
        var worldSize = this.world.getSize();
        switch (this.direction) {
            case "N":
                if (this.row === 0) alert("cannot move");
                else this.row = this.row - 1;
                break;
            case "W":
                if (this.col === 0) alert("cannot move");
                else this.col = this.col - 1;
                break;
            case "S":
                if (this.row === worldSize.height - 1) alert("cannot move");
                else this.row = this.row + 1;
                break;
            case "E":
                if (this.col === worldSize.width - 1) alert("cannot move");
                else this.col = this.col + 1;
                break;
        }
    };
    this.turnLeft = function () {
        switch (this.direction) {
            case "N": this.direction = "W"; break;
            case "W": this.direction = "S"; break;
            case "S": this.direction = "E"; break;
            case "E": this.direction = "N"; break;
        }
    };
}
