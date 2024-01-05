class Painter {
    constructor() {
        
        this.previousX = null;
        this.previousY= null;
    }

    penDown(x, y) {
    strokeWeight(4);
      if (this.previousX && this.previousY) {
         line(x, y, this.previousX , this.previousY);
      }
      this.previousX = x;
      this.previousY = y;
    }

    penUp() {
      this.previousX = null;
      this.previousY = null;
    }
}