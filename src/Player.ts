export class Player {

    context: CanvasRenderingContext2D;
    src: string;
    x: number;
    y: number;
    width: number;
    height: number;
    image: HTMLImageElement;

    constructor (context: CanvasRenderingContext2D, src:string, width: number, height: number, x: number) {
        this.context = context;
        this.src = src;
        this.width = width
        this.height = height;
        this.image;

        this.x = x;
        this.y;
    }

    draw(x: number, screenHeight: number){
        this.image = new Image();
        this.image.src = this.src;
        this.context.drawImage(this.image, x, screenHeight - (26 + this.height), this.width, this.height)
    }
}
