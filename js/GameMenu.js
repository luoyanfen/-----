class GameMenu{
    constructor(width,height,game_score){
        this.width      = width;
        this.height     = height;
        this.game_score = game_score;
        //初始化游戏开始图
        this.initStart();
        //初始化游戏菜单图
        this.initMenuImg();

    }
    initMenuImg(){
        this.menuImg     = new Image;
        this.menuImg.src = './img/game_menu.jpg';
    }
    initStart(){
        this.startImge     = new Image;
        this.startImge.src = './img/start.jpg';
    }
    run(paint){
        this.onDraw(paint);
    }
    onDraw(paint){
        paint.drawImage(this.menuImg,0,0,this.width,this.height);
        paint.drawImage(this.startImge,0,0,230,99,168,374,183,66);
        paint.strokeText('游戏得分:',166,200);
        paint.strokeText(this.game_score,210,250);

    }
    onmouseDown(x,y){
        if(
            x>168 && x<168+183 && y>374 && y<374+66
        ){
            this.setStart();
        }
    }
}