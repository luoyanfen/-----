class Game{
    constructor(width,height){
        this.width  = width;
        this.height = height;
        //初始化数据
        this.initData();

        //游戏界面
        this.initView();

        //添加画布方法
        this.initCanvas();
    }
    initData(){

        //游戏分数的初始值
       this.game_score = 0;

        this.game_menu = 0;
        this.game_view =  this.game_menu+1;
        this.state     =  this.game_menu;
    }
    initCanvas(){
        //创建画布
        let canvas    = document.createElement("canvas");
        canvas.width  = this.width;
        canvas.height = this.height;
        //绘制一个上下文对象
        this.paint             = canvas.getContext('2d');
        this.paint.font        = '34px sans-serif';
        this.paint.strokeStyle = 'red';
        this.paint.lineWidth   = 2;
        //将画布居中
        canvas.style.position = 'absolute';
        canvas.style.left     = (window.innerWidth-canvas.width)/2+'px';
        canvas.style.top      = 0
        //获取div元素
        let div = document.getElementById("game");
        div.appendChild(canvas);

        //添加鼠标画布点击事件
       canvas.onclick = this.onmouseDown.bind(this);
    }
    initView(){
        switch(this.state){
            //游戏菜单界面
            case this.game_menu:
                this.view = new GameMenu(this.width,this.height,this.game_score);
                break;
            //游戏开始界面
            case this.game_view:
                this.view = new GameView(this.width,this.height);
                break;
        }
        this.view.setGameState = this.setState.bind(this);
        this.view.setStart     = this.onStart.bind(this);
    }
    setState(score){
        this.state      = this.game_menu;
        this.game_score = score;
        this.initView();
    }
    onStart(){
        this.state = this.game_view;
        this.initView();
    }
    start(){
        setInterval(this.run.bind(this),250);
    }
    run(){
        this.view.run(this.paint);
    }
    onmouseDown(e){
        let x = e.clientX-(window.innerWidth-this.width)/2;
        let y = e.clientY+document.documentElement.scrollTop;
        this.view.onmouseDown(x,y);
    }
}
