// Classe do sprite Bola

function Bola(context) {
    this.context = context;
    this.x = 0;
    this.y = 0;
    this.speedX = 0;
    this.speedY = 0;

    this.color = 'black';
    this.ray = 10;
}

Bola.prototype = {
    update: function () {
        var ctx = this.context;

        if (this.x < this.ray || this.x > ctx.canvas.width - this.ray) {
            this.speedX *= -1;
        }

        if (this.y < this.ray || this.y > ctx.canvas.height - this.ray) {
            this.speedY *= -1;
        }

        this.x += this.speedX;
        this.y += this.speedY;
    },
    draw: function () {
        var ctx = this.context;

        ctx.save();
        ctx.fillStyle = this.color;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.ray, 0, 2 * Math.PI, false);
        ctx.fill();

        ctx.restore();
    }
}