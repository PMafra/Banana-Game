import { Player } from "./Player";

export class Game {
    
    canvas: HTMLCanvasElement;
    screenWidth: number;
    screenHeight: number;
    context: CanvasRenderingContext2D;

    gameLoopInterval: ReturnType<typeof setInterval> | string;
    turnInterval: ReturnType<typeof setInterval> | string;

    FPS: number;

    player: Player;

    private setupGame () {
        this.canvas.width = this.screenWidth;
        this.canvas.height = this.screenHeight;
    }

    private setupPlayer() {
        this.player = new Player(this.context, './images/alien.png', 60, 100, 0);
    }

    constructor (canvas: HTMLCanvasElement, screenWidth: number, screenHeight: number, context: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.context = context;

        this.gameLoopInterval;
        this.turnInterval;

        this.player;

        this.FPS = 60;

        this.setupGame();
        this.setupPlayer();
    }

    movePlayer (event: KeyboardEvent) {
        if (event.key === 'a' && this.player.x >= 5) {
            this.player.x -= 6;
        }
        if (event.key === 'd' && this.player.x <= this.screenWidth - 60) {
            this.player.x += 6;
        }
    }

    updateScreenSize (width: number, heigth: number) {
        this.screenWidth = width;
        this.screenHeight = heigth;
        this.setupGame();
    }

    clearScreen () {
        this.context.clearRect(0,0,this.screenWidth,this.screenHeight);
    }

    turn () {
        if (!this.turnInterval) {
            this.turnInterval = setInterval(() => {
            }, 3000)
        }
    }

    gameLoop () {
        this.clearScreen();
        this.player.draw(this.player.x, this.screenHeight)
        this.turn();
    }

    start () {
        this.gameLoopInterval = setInterval(() => {
            this.gameLoop();
        }, 1000/this.FPS);
    }
}
