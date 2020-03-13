class GameView{
    constructor(width,height){
        this.width  = width;
        this.height = height;

        //初始化数据
        this.initData();

        //添加游戏地图
        this.initMap();

        //添加狼
        this.initWolf();

        //游戏时间
        this.initProgress();
        //点击分数改变事件
        this.wolfClick();

    }
    initData(){
        //分数
        this.score = 0
    }
    wolfClick(){
        this.wolf.onclick = this.setScore.bind(this);
    }
    setScore(tindex){
        if(tindex==0){
            this.score += 10;
        }else{
            this.score -= 10;
            if(this.score<0){
                this.score = 0;
            }
        }
    }
    initProgress(){
        this.progress          = new Progress();
        this.progress.setState = this.setViweState.bind(this);
    }
    setViweState(){
        this.setGameState(this.score);
    }
    initMap(){
        this.gameMap = new GameMap(this.width,this.height);
    }
    initWolf(){
        this.wolf    = new Wolf();
    }
    run(paint){
        this.onDraw(paint);
    }
    onDraw(paint){
        //绘制地图
        this.gameMap.run(paint);
        //绘制狼
        this.wolf.run(paint);
        //绘制分数
        paint.strokeText(this.score,100,50);
        //绘制时间进度条
        this.progress.run(paint)
    }
    onmouseDown(x,y){
        this.wolf.onmouseDown(x,y);
    }
}