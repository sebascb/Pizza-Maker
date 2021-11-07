class Render {
    constructor(canvas, space) {
        this.canvas = canvas;
        this.space = space;
        this.ctx = this.canvas.getContext('2d');
        this.canvas.style.background = background.url('');
    }
}