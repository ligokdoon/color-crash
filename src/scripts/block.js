// const BLOCK_COLORS = ['pink', 'blue', 'purple']
const BLOCK_COLORS = ['red', 'yellow', 'green', 'blue', 'orange', 'pink', 'purple']
const blockWidth = 60;
const blockHeight = 80;

export class Block {
    constructor(scrollSpeed, canvas, xPos) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.scrollSpeed = scrollSpeed;
        this.startX = xPos;
        this.x = xPos;
        this.color = BLOCK_COLORS[Math.floor(Math.random() * BLOCK_COLORS.length)];
        this.collided = false;
        this.drawBlock = this.drawBlock.bind(this);
    }

    drawBlock(lastBlockX) {
        if(this.x <= -blockWidth) {
            this.color = BLOCK_COLORS[Math.floor(Math.random() * BLOCK_COLORS.length)];
            this.x = lastBlockX + blockWidth + 500;
            this.collided = false;
        }
    
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, 560, blockWidth, blockHeight);
        this.ctx.stroke();
        this.ctx.closePath();

        this.x -= this.scrollSpeed;
    }
}