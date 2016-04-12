// Classe de Animação dos sprites

function Animacao(context) {
    this.context = context;
    this.sprites = [];
    this.started = false;
}

Animacao.prototype = {
    newSprite: function (sprite) {
        this.sprites.push(sprite);
    },
    start: function () {
        this.started = true;
        this.nextFrame();
    },
    stop: function () {
        this.started = false;
    },
    nextFrame: function () {
        if (!this.started) {
            return;
        }

        this.clearScreen();

        for (var i in this.sprites) {
            this.sprites[i].update();
        }

        for (var i in this.sprites) {
            this.sprites[i].draw();
        }

        var animacao = this;

        requestAnimationFrame(function() {
            animacao.nextFrame();
        });
    },
    clearScreen: function () {
        var ctx = this.context;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
};