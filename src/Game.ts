export class Game {
    
    canvas: HTMLCanvasElement;
    screenWidth: number;
    screenHeight: number;
    context: CanvasRenderingContext2D;

    gameLoopInterval: ReturnType<typeof setInterval> | string;
    turnInterval: ReturnType<typeof setInterval> | string;

    player: HTMLImageElement;

    FPS: number;

    playerX: number;

    constructor (canvas: HTMLCanvasElement, screenWidth: number, screenHeight: number, context: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.context = context;

        this.gameLoopInterval;
        this.turnInterval;

        this.player;
        this.playerX = 0;

        this.FPS = 60;

        this.setupGame();
    }

    setupGame () {
        this.canvas.width = this.screenWidth;
        this.canvas.height = this.screenHeight;
    }

    updateScreenSize (width: number, heigth: number) {
        this.screenWidth = width;
        this.screenHeight = heigth;
        this.setupGame();
    }

    turn () {
        if (!this.turnInterval) {
            this.turnInterval = setInterval(() => {
            }, 3000)
        }
    }

    clearScreen () {
        this.context.clearRect(0,0,this.screenWidth,this.screenHeight);
    }

    drawPlayer () {
        this.player = new Image();
        this.player.src = './images/alien.png';
        this.context.drawImage(this.player, this.playerX, this.screenHeight - 126, 60, 100)
    }

    movePlayer (event: KeyboardEvent) {
        if (event.key === 'a' && this.playerX >= 5) {
            this.playerX -= 5;
        }
        if (event.key === 'd' && this.playerX <= this.screenWidth - 60) {
            this.playerX += 5;
        }
    }

    gameLoop () {
        this.clearScreen();
        this.drawPlayer();
        this.turn();
    }

    start () {
        this.gameLoopInterval = setInterval(() => {
            this.gameLoop();
        }, 1000/this.FPS);
    }
    
}
