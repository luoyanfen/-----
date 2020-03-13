class GameMap{
    constructor(width,height){
        this.width  = width;
        this.height = height;

        //初始化地图 图片
        this.initMapImage();
    }
    initMapImage(){
        this.mapImg      = new Image();
        this.mapImg.src  = "./img/game_bg.jpg";
    }
    run(paint){
        this.onDraw(paint);
    }
    onDraw(paint){
        paint.drawImage(this.mapImg,0,0,this.width,this.height);
    }
}