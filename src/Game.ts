export class Game {
    
    canvas: HTMLCanvasElement;
    screenWidth: number;
    screenHeight: number;
    context: CanvasRenderingContext2D;

    gameLoopInterval: ReturnType<typeof setInterval> | string;
    turnInterval: ReturnType<typeof setInterval> | string;

    FPS: number;

    constructor (canvas: HTMLCanvasElement, screenWidth: number, screenHeight: number, context: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.context = context;

        this.gameLoopInterval;
        this.turnInterval;

        this.FPS = 60;
    }

    turn () {
        if (!this.turnInterval) {
            this.turnInterval = setInterval(() => {
            }, 3000)
        }
    }

    clearScreen () {
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    }

    gameLoop () {
        this.clearScreen();

        this.turn();
    }

    start () {
        this.gameLoopInterval = setInterval(() => {
            this.gameLoop();
        }, 1000/this.FPS);
    }
    
}
